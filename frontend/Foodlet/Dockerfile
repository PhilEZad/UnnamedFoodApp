FROM node:latest as node

# install global packages
RUN npm install -g firebase-tools

# copy files structure
WORKDIR /app
COPY . .

RUN chmod +x entrypoint.sh

RUN npm install
ENV action=""
ENV firebase_token=""
# run main script
ENTRYPOINT ["./entrypoint.sh"]
