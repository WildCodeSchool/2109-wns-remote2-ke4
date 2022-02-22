FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY public public
COPY tsconfig.json ./
RUN npm i
COPY src src

ENV WDS_SOCKET_PORT 0
CMD npm start
