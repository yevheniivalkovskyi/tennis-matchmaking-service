# Tennis Matchmaking Service

This project demonstrates a simple microservice architecture with a React front-end and a Spring Boot back-end secured by Keycloak. Docker and Kubernetes manifests are provided together with a GitHub Actions workflow.

## Structure

- `user-service` – Spring Boot microservice built with Maven
- `frontend` – React application using Keycloak for authentication
- `k8s/` – Kubernetes manifests for the services and Keycloak
- `docker-compose.yml` – Development environment bringing up Keycloak, the back-end and front-end

## Usage

Build and run locally using Docker Compose:

```bash
docker compose up --build
```

The front-end will be available at `http://localhost:3000` and Keycloak at `http://localhost:8080`.
