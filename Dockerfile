# Stage 1
FROM node:latest as node
WORKDIR /Frontend/Foodlet/app
COPY . .
RUN npm install
RUN npm run build --prod
