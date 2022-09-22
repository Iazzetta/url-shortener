import { Shortener } from "../../domain/entities/shortener";
import { RedirectShortener } from "../../domain/usecases/redirect-shortener";
import { RedirectShortenerRepository } from "../contracts/redirect-shortener";

export class RedirectShortenerService implements RedirectShortener {
    constructor(
        private readonly redirectShortenerRepository: RedirectShortenerRepository
    ) {}

    async redirect(short_url: string): Promise<any> {
        return this.redirectShortenerRepository.redirect(short_url)
    }
}