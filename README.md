# Tennis Matchmaking Service


This repository contains a minimal Spring Boot application with a simple HTML front-end. The Docker build now uses an available Maven base image.

## Building

```
docker build -t tennis-service .
```

## Running

```
docker run -p 8080:8080 tennis-service
```

Visit `http://localhost:8080/frontend/index.html` to see the front-end page. It fetches data from the `/api/hello` endpoint.
=======
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
Open `http://localhost:3000/login` to access the login page or `http://localhost:3000/register` to register a new account.
