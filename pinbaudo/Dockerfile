FROM nginx:stable-alpine

RUN mv /usr/share/nginx/html/index.html /usr/share/nginx/html/old-index.html

COPY . /usr/share/nginx/html/

EXPOSE 80
