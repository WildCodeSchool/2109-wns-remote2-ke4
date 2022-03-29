FROM node:lts



WORKDIR /back
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install 

COPY . .
CMD ["npm","run","dev"]