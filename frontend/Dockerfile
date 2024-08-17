FROM node:20-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

# serve - helps you serve a static site, single page application or just a static file 
RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD [ "serve", "-s", "dist" ]