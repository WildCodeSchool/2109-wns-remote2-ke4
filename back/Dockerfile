FROM node:lts



WORKDIR /back
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install 

COPY . .
RUN npx prisma generate --schema=./src/prisma/schema.prisma
CMD ["npm","run","dev"]