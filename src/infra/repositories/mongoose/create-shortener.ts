import { connect } from "mongoose";
import { nanoid } from "nanoid";
import { CreateShortenerRepository } from "../../../datalayer/contracts/create-shortener";
import { Shortener } from "../../../domain/entities/shortener";
import { Credentials } from "../../../presentation/helpers/credentials";
import { generateExpiration } from "../../../presentation/helpers/generate-expiration";
import { ShortenerSchema } from "./schemas/shortener";

export class MongooseCreateShortenerRepository implements CreateShortenerRepository {
    async create(long_url: string): Promise<Shortener> {

        const db = await connect(Credentials.DatabaseURI);
        const [createdAt, expiresAt] = generateExpiration()
        const shortened = await new ShortenerSchema({ 
            long_url: long_url,
            short_url: `${Credentials.PrefixUrl}${nanoid(Credentials.MaxBytesShortUrl)}`,
            createdAt: createdAt,
            expiresAt: expiresAt
         }).save();
        db.disconnect()
        return shortened
    }
}