import { Shortener } from "../../domain/entities/shortener"
import { RedirectShortener } from "../../domain/usecases/redirect-shortener"
import { RedirectShortenerController } from "../contracts/controller"
import { HttpResponse } from "../contracts/http"
import { badRequest, serverError, success } from "../contracts/response"
import { ErrorMessages } from "../errors/error-messages"
import { Credentials } from "../helpers/credentials"

export class HandleRedirectShortenerController implements RedirectShortenerController {

    constructor(private readonly redirectShortener: RedirectShortener) {}

    async handle(short_url: string): Promise<HttpResponse<Shortener>> {

        if (short_url.length > Credentials.MaxBytesFullShortUrl)
            return badRequest(ErrorMessages.ShortUrlMaxSizeExceeded)

        try {
            const shortener = await this.redirectShortener.redirect(short_url)
            return success(shortener.long_url)
        } catch (error: any) {
            return serverError(error.message)
        }
    }
}