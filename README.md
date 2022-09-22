# URL Shortener

URL Shortener app using NodeJS and Mongodb.

## Features

- Clean Architecture in Typescript
- Tests with Jest
- Exposing app with Express
- Postman Request Import

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
```

## Run

```bash
$ docker-compose build
```

## Test

```bash
$ npm test
```