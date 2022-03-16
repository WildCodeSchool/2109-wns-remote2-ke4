FROM node:lts-alpine

RUN mkdir /back

WORKDIR /back
COPY package*.json ./
COPY tsconfig.json ./
RUN npm i
COPY src src
RUN npx prisma generate --schema=./src/prisma/schema.prisma
RUN npm run build
CMD ["node", "dist/server.js"]