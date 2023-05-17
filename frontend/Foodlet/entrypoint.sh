#!/bin/bash

if [ "$action" == "test" ]
then
    npm run test
fi

if [ "$action" == "lint" ]
then
    npm run lint
fi

if [ "$action" == "e2e" ]
then
    npm run e2e
fi

if [ "$action" == "build" ]
then
    npm run build
fi

if [ "$action" == "deploy" ]
then
    firebase deploy --token "1//09FDXWImVkzGICgYIARAAGAkSNwF-L9Ir5IS7SHqIvetURTqAhpQ5Dn8UCPpunta4XrlKxfJrUqg7gq7ZfHZ_BCoqUWsg8kBHoiE"
fi
