FROM node:latest as node

# copy files structure
WORKDIR /app
COPY . .

#
# expensive operations here, to leverege build caching.
#

# install system libraires for chrome runner
RUN apt update
RUN apt install -y ca-certificates fonts-liberation libappindicator3-1 libasound2 libatk-bridge2.0-0 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgbm1 libgcc1 libglib2.0-0 libgtk-3-0 libnspr4 libnss3 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 lsb-release wget xdg-utils

RUN chmod +x entrypoint.sh

# install packages
RUN npm install
RUN npm install -g firebase-tools

# install test browsers (chrome)
RUN node node_modules/puppeteer/install.js

# Environment variables that can be changed when a container is started
ENV action=""
ENV firebase_token="1//09FDXWImVkzGICgYIARAAGAkSNwF-L9Ir5IS7SHqIvetURTqAhpQ5Dn8UCPpunta4XrlKxfJrUqg7gq7ZfHZ_BCoqUWsg8kBHoiE"

# set main script (starts when a new container instance is started)
#ENTRYPOINT ["./entrypoint.sh"]
