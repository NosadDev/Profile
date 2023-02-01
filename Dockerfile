FROM nginx:1.22-alpine
COPY ./config/default.conf /etc/nginx/conf.d/default.conf
COPY ./assets /usr/share/nginx/html/assets
COPY ./index.html /usr/share/nginx/html