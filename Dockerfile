FROM node:16-alpine3.14 as build-env
WORKDIR /app

# COPY ./package.json ./package-lock.json ./
COPY package*.json ./

RUN npm i --force

COPY . ./

RUN ls -al

# Serve the app
CMD ["node", "server.js"]
