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
