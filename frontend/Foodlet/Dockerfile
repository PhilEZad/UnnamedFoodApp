FROM node:latest as node

# install global packages
RUN npm install -g firebase-tools

# copy files structure
WORKDIR /app
COPY . .

RUN chmod +x entrypoint.sh

RUN npm install

ENV action=""
ENV firebase_token="1//09FDXWImVkzGICgYIARAAGAkSNwF-L9Ir5IS7SHqIvetURTqAhpQ5Dn8UCPpunta4XrlKxfJrUqg7gq7ZfHZ_BCoqUWsg8kBHoiE"

# run main script
ENTRYPOINT ["./entrypoint.sh"]
