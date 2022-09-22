import { fakeShortener } from "../../infra/data-sources/shortener";
import { makeFakeRedirectShortenerController } from "../../main/factories/fakedb/redirect-shortener";

test('test fake redirect shortener url - response status', async () => {
    const controller = makeFakeRedirectShortenerController()
    const httpResponse = await controller.handle(fakeShortener[0].short_url)
    expect(httpResponse.statusCode).toBe(200);
});