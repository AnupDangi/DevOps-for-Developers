## build stage

FROM node:22-alpine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

RUN npm run build 
## this gives the build folder 

## server stage
FROM nginx:alpine
## nginx runs on port 80
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80 

CMD ["nginx","g","deamon off;"]