#!/bin/bash


echo $action
echo "$action"

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
    firebase deploy --token "$firebase_token"
fi

if [ "$action" == "firebase_check" ]
then
    firebase login:list --token "$firebase_token"
fi
