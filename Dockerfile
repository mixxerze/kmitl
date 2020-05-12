FROM node:9

MAINTAINER Khunanon Sakboriboon

LABEL "version" = "1.0.0"

WORKDIR /var/www/app

COPY . ./

EXPOSE 3000

CMD ["node" , "index.js"];
