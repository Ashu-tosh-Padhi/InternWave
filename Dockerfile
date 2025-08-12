FROM httpd:2.4

RUN apt-get update && apt clean\
    && rm -rf /var/lib/apt/lists/*

RUN rm -rf /usr/local/apache2/htdocs/*
COPY . /usr/local/apache2/htdocs/
