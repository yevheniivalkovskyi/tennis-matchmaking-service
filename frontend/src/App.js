import React from 'react';
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
  return <button onClick={() => keycloak.login()}>Login</button>;
};

const App = () => (
  <ReactKeycloakProvider authClient={keycloak}
    initOptions={{ onLoad: 'login-required' }}>
    <LoginPage />
  </ReactKeycloakProvider>
);

export default App;
