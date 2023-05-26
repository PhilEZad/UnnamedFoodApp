#! /bin/bash
cd $1
ps aux|grep -v awk|awk '/foodlet/ {print $2}'| xargs -I {} kill {}
ng build
firebase projects:list | grep 'foodlet' | awk '{print $4}' | xargs -I {} firebase emulators:start --project  {}
