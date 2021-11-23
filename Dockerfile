### STAGE 1: Build ###
FROM node:14.18.1-alpine AS build
WORKDIR /app
COPY . ./
RUN npm install -g cross-env
RUN npm install
RUN npm run dev

### STAGE 2: Run ###

FROM nginx:1.17.1-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf