import { nanoid } from "nanoid"
import { CreateShortenerRepository } from "../../../datalayer/contracts/create-shortener"
import { Shortener } from "../../../domain/entities/shortener"
import { Credentials } from "../../../presentation/helpers/credentials"
import { generateExpiration } from "../../../presentation/helpers/generate-expiration"
import { fakeShortener } from "../../data-sources/shortener"

export class FakeCreateShortenerRepository implements CreateShortenerRepository {
    
    async create (long_url: string): Promise<Shortener> {
        const [createdAt, expiresAt] = generateExpiration()
        const newSite:Shortener = {
            long_url: long_url,
            short_url: `${Credentials.PrefixUrl}${nanoid(Credentials.MaxBytesShortUrl)}`,
            createdAt: createdAt,
            expiresAt: expiresAt
        }
        fakeShortener.push(newSite)
        return newSite
    }
}