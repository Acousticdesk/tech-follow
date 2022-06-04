# syntax=docker/dockerfile:1
FROM node:16

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm i -g @nestjs/cli
RUN npm run build
RUN rm -rf ./src

EXPOSE 3000

CMD [ "npm", "run", "start:prod" ]
