FROM node:lts-alpine

RUN mkdir /back
WORKDIR /back
COPY package*.json ./
COPY tsconfig.json ./
RUN npm i
COPY src src

CMD npm start