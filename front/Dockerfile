FROM node:lts-alpine

RUN mkdir /app
WORKDIR /app
COPY package*.json ./
COPY public public
COPY tsconfig.json ./
RUN npm install
COPY src src
CMD npm start