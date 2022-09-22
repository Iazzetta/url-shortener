import { Credentials } from "../../presentation/helpers/credentials";

const request = require('supertest');

describe('POST /shorten', () => {

  let server:any;
  beforeAll(async () => {
    const mod = await import('../../main/adapters/express-server');
    server = (mod as any).default;
  });

  afterAll((done) => {
    if (server) {
      server.close(done);
    }
  });

  it('should shorten url', async () => {
    const res = await request(server)
    .post('/shorten')
    .send({
        long_url: 'https://google.com',
    })
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('short_url')
    expect(res.body.short_url).toHaveLength(22)
    const expirationCheck = new Date(new Date(res.body.createdAt).getTime())
    expirationCheck.setHours(
        expirationCheck.getHours() + 
        Credentials.ExpirationHour
    )
    expect(new Date(res.body.expiresAt)).toStrictEqual(expirationCheck)

  })
})