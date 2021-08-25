#!/bin/bash
set -e
APP="$1"

rm -rf dist/
npm run build
cp package.json dist/
cp package-lock.json dist/
tar -czvf virtuoso-design-system.tar.gz dist/
cp virtuoso-design-system.tar.gz "../${APP}"
cd "../${APP}" && npm i virtuoso-design-system.tar.gz