# AngularDocker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.2.

## Build development environment
 - navigate to `my/download/path/angular_docker`
 - Run `docker compose up -d --build`
 - this project use barnch `master` => `https://github.com/emilioreyes/flask-backend.git` as backend

## Note
- this project have `proxy.conf.json` to consume the dockerized backend, you should change the  `"target":"http://your.locol.ip.address:4000",`
- After the change execute `docker compose down` and `docker compose up -d --build`
- Navigate to `http://localhost:2000/`.
- you can open the terminal `docker exec -it ng_frontend /bin/sh` The application will automatically reload if you change any of the source files.

