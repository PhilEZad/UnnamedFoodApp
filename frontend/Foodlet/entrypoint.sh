#!/bin/bash

if [ "$action" == "test" ]
then
    npm run test
    exit $?
fi

if [ "$action" == "lint" ]
then
    npm run lint
    exit $?
fi

if [ "$action" == "e2e" ]
then
    npm run e2e
    exit $?
fi

if [ "$action" == "build" ]
then
    npm run build
    exit $?
fi

if [ "$action" == "deploy" ]
then
    firebase use "foodlet-a2c4b" --token "$firebase_token"

    result=$(firebase deploy --non-interactive --token "$firebase_token" | grep "Error" | head -c1 | wc -c)
    if [[ $result -ne 0 ]]; then
      exit 126
    fi
    exit $?

fi

if [ "$action" == "firebase_check" ]
then
    result=$(firebase use "foodlet-a2c4b" --token "$firebase_token" | grep "Error" | head -c1 | wc -c)
    if [[ $result -ne 0 ]]; then
      exit 126
    fi
    exit $?
fi

echo "invalid action environment variable [$action]"
exit 127
