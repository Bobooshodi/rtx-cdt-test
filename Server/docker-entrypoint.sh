#!/bin/sh

npm run create-db

npm run migrate-db

npm test

npm run dev