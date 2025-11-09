FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . . 

EXPOSE 5000

CMD {"npm","start"}


## this is dockerizing the backend
