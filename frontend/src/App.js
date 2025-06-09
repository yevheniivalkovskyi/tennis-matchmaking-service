import React from 'react';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import { ReactKeycloakProvider, useKeycloak } from '@react-keycloak/web';
import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
  url: 'http://localhost:8080',
  realm: 'tennis',
  clientId: 'frontend',
});

const LoginPage = () => {
  const { keycloak } = useKeycloak();
  if (keycloak.authenticated) {
    return <p>Welcome, {keycloak.tokenParsed.preferred_username}</p>;
  }
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => keycloak.login()}>Login</button>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

const RegisterPage = () => {
  const { keycloak } = useKeycloak();
  if (keycloak.authenticated) {
    return <p>You are logged in as {keycloak.tokenParsed.preferred_username}</p>;
  }
  return (
    <div>
      <h2>Register</h2>
      <button onClick={() => keycloak.register()}>Create Account</button>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

const App = () => (
  <ReactKeycloakProvider authClient={keycloak} initOptions={{ onLoad: 'check-sso' }}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  </ReactKeycloakProvider>
);

export default App;
