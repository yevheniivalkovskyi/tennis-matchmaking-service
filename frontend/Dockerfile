FROM node:20 as build
WORKDIR /app
COPY package.json webpack.config.js .babelrc ./
COPY public ./public
COPY src ./src
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
