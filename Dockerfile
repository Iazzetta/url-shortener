FROM node:14 as base

WORKDIR /home/node/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

RUN npm test

FROM base as production

ENV NODE_PATH=./dist