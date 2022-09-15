FROM node:16.15-alpine

WORKDIR /app

COPY package.json .

COPY tsconfig.json ./

RUN npm install typescript -g

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "yarn", "start" ]