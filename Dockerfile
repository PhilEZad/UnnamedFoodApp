# Stage 1
FROM node:latest as node
WORKDIR /frontend/Foodlet/src/app
COPY package*.json ./
RUN npm install 
