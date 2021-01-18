# stage 1 - build
FROM node:14-buster as builder
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# stage 2 - run
FROM node:14-buster
WORKDIR /usr/app
COPY package*.json ./
RUN npm ci

COPY --from=builder /usr/app/build ./build
EXPOSE 4000
RUN npm run start