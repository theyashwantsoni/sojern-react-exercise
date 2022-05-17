FROM node:16.10.0-alpine AS builder
MAINTAINER Yashwant Soni<yashwantsoni009@gmail.com>

WORKDIR /app
COPY . .
RUN yarn 
RUN yarn run build

FROM nginx:alpine
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'