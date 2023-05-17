#!/bin/bash

if [ "$action" == "test" ]
then
    npm run test
    exit 0
fi

if [ "$action" == "lint" ]
then
    npm run lint
    exit 0
fi

if [ "$action" == "e2e" ]
then
    npm run e2e
    exit 0
fi

if [ "$action" == "build" ]
then
    npm run build
    exit $?
fi

if [ "$action" == "deploy" ]
then
    # if firebase_check has passed we can assume it is safe to call here
    firebase use "foodlet-a2c4b" --token "$firebase_token"

    # see firebase_check block
    result=$(firebase deploy --non-interactive --token "$firebase_token" | grep "Error" | head -c1 | wc -c)
    if [[ $result -ne 0 ]]; then
      exit 126
    fi
    exit $?
fi


if [ "$action" == "firebase_check" ]
then
    echo "Checking if firebase token is valid."
    # grep      = find lines in output matching regex
    # head -c1  = select first character in stdio
    # wc -c     = true if any character else false
    result=$(firebase use "foodlet-a2c4b" --token "$firebase_token" | grep "Error" | head -c1 | wc -c)
    if [[ $result -ne 0 ]]; then # expect empty iostream
      exit 126 # error is present (probably an invalid token)
    fi
    exit $? # reemit current system error code
fi

echo "invalid action environment variable [$action]"
exit 127 # no program with that name (no valid action is present)
