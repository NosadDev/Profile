FROM nginx:1.22-alpine
COPY ./config/default.conf /etc/nginx/conf.d/default.conf
COPY ./ /usr/share/nginx/html