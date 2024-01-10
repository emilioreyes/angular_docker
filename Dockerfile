FROM node:18.19.0-alpine3.19

WORKDIR /app/client

COPY package.json .
RUN npm install -g @angular/cli@16
RUN npm install


CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check","--proxy-config","proxy.conf.json"]
#CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]

