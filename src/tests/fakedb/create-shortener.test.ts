import { makeFakeCreateShortenerController } from "../../main/factories/fakedb/create-shortener";
import { Credentials } from "../../presentation/helpers/credentials";

const TEST_LONG_URL = 'https://google.com'

test('test fake create shortener url - response status', async () => {
    const controller = makeFakeCreateShortenerController()
    const httpResponse = await controller.handle(TEST_LONG_URL)
    expect(httpResponse.statusCode).toBe(200);
});
test('test fake create shortener url - valid short url bytes size', async () => {
    const controller = makeFakeCreateShortenerController()
    const httpResponse = await controller.handle(TEST_LONG_URL)
    expect(httpResponse.data.short_url.length).toBe(
        Credentials.MaxBytesFullShortUrl
    )
})
test('test fake create shortener url - expiration check', async () => {
    const controller = makeFakeCreateShortenerController()
    const httpResponse = await controller.handle(TEST_LONG_URL)
    const expirationCheck = new Date(httpResponse.data.createdAt.getTime())
    expirationCheck.setHours(
        expirationCheck.getHours() + 
        Credentials.ExpirationHour
    )
    expect(httpResponse.data.expiresAt).toStrictEqual(expirationCheck)
})