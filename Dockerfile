FROM node:current-slim

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./
COPY ./app.js ./

RUN npm ci

EXPOSE 8080

COPY . .

CMD [ "node", "app.js" ]