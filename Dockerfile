# Stage 1
FROM node:latest as node
WORKDIR \frontend\Foodlet\src\app
COPY . .
RUN npm install
