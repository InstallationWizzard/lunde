FROM node:16-alpine3.15

WORKDIR /client
COPY package.json /client
COPY package-lock.json /client

RUN npm i
RUN npm i -g serve
COPY . /client
RUN npm run build

CMD [ "serve", "-s", "build" ]

