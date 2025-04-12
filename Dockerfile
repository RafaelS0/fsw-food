FROM node:22.14.0-bullseye

WORKDIR /app

COPY . /app

RUN npm install

CMD ["npm","run","dev"]