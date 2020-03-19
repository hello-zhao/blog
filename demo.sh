#! /usr/bin/env bash

WORK_FILES=$(git diff --name-only | grep -E '(.js|.ts|.tsx)$')
STAGED_FILES=$(git diff --cached --name-only | grep -E '(.js|.ts|.tsx)$')
ESLINT="$(git rev-parse --show-toplevel)/node_modules/.bin/eslint"

echo "$WORK_FILES"
echo "hhhhh"

if [[ "$WORK_FILES" != "" ]]; then
  echo "\nPlease add staged(git add .)"
  exit 0
fi

if [[ "$STAGED_FILES" = "" ]]; then
  echo "\nPlease git add .222"
  exit 1
fi

if [[ ! -x "$ESLINT" ]]; then
  echo "\nPlease install ESlint (yarn add -D eslint)"
  exit 2
fi

PASS=true

echo "\nValidating Files By ESlint: \n"

for FILE in $STAGED_FILES
do
  "$ESLINT" -c ./.eslintrc.json "$FILE"

  if [[ "$?" == 0 ]]; then
    echo "\nESLint Passed: $FILE"
  else
    PASS=false
  fi
done

if ! $PASS; then
  echo "\nPlease fix the ESLint errors and try again. \n"
  exit 1
else
  echo "\nESlint Passed. \n"
fi

exit $?
