FROM node:latest as build

COPY /package.json /

RUN npm install --production

COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build ./build /usr/share/nginx/html
