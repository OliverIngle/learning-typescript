#!/bin/bash

printf "> Enter option: "
read opt

if [ $opt == 'js' ]; then
printf "> Specify file: "
read f
printf "\n\n\t\t----- RUNNING APP ------\n\n"
node $f

elif [ $opt == 'ts' ]; then
printf  "\n\n\t\t----- RUNNING TYPESCRIPT COMPILER ------\n"
tsc

elif [ $opt == 'dev' ]; then
printf  "\n\n\t\t----- RUNNING NODEMON ------\n"
nodemon ./src/index.ts

elif [ $opt == 'help' ]; then
printf "
ts   > run's typescript compiler
js   > run's javascript file (to specify later)
dev  > starts nodemon on index file\n
"

else
printf "\n[Unknown option]\n\n"

fi