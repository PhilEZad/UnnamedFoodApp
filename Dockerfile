# Stage 1
FROM node:latest as node
WORKDIR /frontend/Foodlet
COPY . .
RUN npm install 
