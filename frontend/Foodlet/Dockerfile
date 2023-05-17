FROM node:latest as node

# install global packages
RUN npm install -g firebase-tools

# copy files structure
WORKDIR /app
COPY . .

# expensive operations here, to leverege build caching.
RUN chmod +x entrypoint.sh
RUN npm install

# Environment variables that can be changed when a container is started
ENV action=""
ENV firebase_token="1//09FDXWImVkzGICgYIARAAGAkSNwF-L9Ir5IS7SHqIvetURTqAhpQ5Dn8UCPpunta4XrlKxfJrUqg7gq7ZfHZ_BCoqUWsg8kBHoiE"

# set main script (starts when a new container instance is started)
ENTRYPOINT ["./entrypoint.sh"]
