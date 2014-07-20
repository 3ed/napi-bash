#!/bin/bash

str1="%1test%b jeden"
str2="test%c dwa%d"

for i in "$str1" "$str2"; do
  while read -a -d '%' l; do
    echo $l
  done <<< $i
done
