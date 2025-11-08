## State 1 --- build Stage
From node:22-alpine as builder

## Create the workspace
WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

## Stage 2 --- Production Stage
From node:22-alpine

WORKDIR /app

COPY --from=builder /app /app/

EXPOSE 3000

ENV PORT=3000

CMD ["node","server.js"]