FROM node:current-alpine3.20

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 3001

CMD [ "npm", "start" ]