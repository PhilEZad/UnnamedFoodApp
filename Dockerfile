# Stage 1
FROM node:latest as node
COPY . .
RUN npm install
