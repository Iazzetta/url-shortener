# URL Shortener

URL Shortener app using NodeJS and Mongodb.

## Features

- Clean Architecture in Typescript
- Tests with Jest
- Shorten URL
- Redirect to URL
- Redis to cache redirects
- Exposing app with Express
- Postman Request Import
- Fake/InMemory Database for Tests

## API Example

### Shorten long url
```
method: POST
endpoint: /shorten
body: {
    long_url: 'https://github.com/Iazzetta'
}
response: {
    statusCode: 200,
    data: {
        long_url: 'https://github.com/Iazzetta',
        short_url: 'www.us.com/bRtlBXhaW1N,
        expiresAt: '2022-09-23T20:00:00.000Z',
        createdAt: '2022-09-22T20:00:00.000Z'
    }
}
```

### Redirect to long url
```
method: GET
endpoint: /bRtlBXhaW1N
redirect: 'https://github.com/Iazzetta'
```

## Requirements

- Docker

## Configuration Enviroument Variables

Create the .env file in the project root and add the necessary variables below:

```
DATABASE_URL="mongodb://...."
PREFIX_URL="www.us.com/"
EXPIRATION_HOUR=24
REDIS_URL="redis://redis:6379"
```

## Run Production

```bash
$ docker-compose up --build
```

## Run Development
```bash
$ npm start
```

## Test

```bash
$ npm test
```