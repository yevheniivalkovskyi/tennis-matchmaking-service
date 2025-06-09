# Build stage
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app
COPY pom.xml .
COPY src ./src
RUN mvn -q package

# Run stage
FROM eclipse-temurin:21-jre
WORKDIR /app
COPY --from=build /app/target/tennis-matchmaking-service-0.0.1-SNAPSHOT.jar app.jar
COPY frontend ./frontend
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]
