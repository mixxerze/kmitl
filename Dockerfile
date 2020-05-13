FROM node:9
COPY . /src
RUN cd /src && npm install
CMD ["node" , "/src/index.js"];
