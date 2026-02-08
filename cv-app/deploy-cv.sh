#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
npm run build
rm -rf ../CV/*
cp -r dist/. ../CV/
