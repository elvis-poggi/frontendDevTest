# from https://hub.docker.com/_/php
FROM php:7.0-apache

# copia il file di config
COPY php.ini /usr/local/etc/php/

# copia gli assset dalla cartella build
COPY build/ /var/www/html/

# copia i file relativi agli endpoint
COPY api/ /var/www/html/api/
