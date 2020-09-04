## Description

Dependency Injection project, created for study purposes.  
The project has been builded over [Nest](https://github.com/nestjs/nest) framework.  

This project aims to return the lyric for a given song (title, artist) using 2 differents services.  
The first one is [Vagalume](https://www.vagalume.com.br/)  
The other one is using [Genius](https://genius.com/)  

## Endpoint

There's only one endpoint implemented, it's `http://localhost:3000/lyric`  
You should pass the title and artist variables as query params, resulting in this `http://localhost:3000/lyric?artist=Linkin Park&title=Numb`

## Problems

There's a know problem that happen sometimes using the **genius** service, for some reason it don't return the lyric sometimes, it's really random :/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
