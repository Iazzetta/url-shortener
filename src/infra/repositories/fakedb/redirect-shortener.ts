import { RedirectShortenerRepository } from "../../../datalayer/contracts/redirect-shortener"
import { fakeShortener } from "../../data-sources/shortener"

export class FakeRedirectShortenerRepository implements RedirectShortenerRepository {
    
    async redirect(short_url: string): Promise<any> {
        const shortener = fakeShortener.filter(i => i.short_url == short_url)
        return shortener[0].long_url
    }
}