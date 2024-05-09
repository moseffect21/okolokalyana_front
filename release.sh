#!/bin/bash
START_TIME=$(date +%s)


source ~/.nvm/nvm.sh
nvm -v
node -v
nvm install 18
node -v
yarn
yarn build
pm2 delete "okolokalyana"
pm2 start npm --name "okolokalyana" -- start
echo 'Done'

END_TIME=$(date +%s)
difference=$(( $END_TIME - $START_TIME ))
echo "$difference seconds"
