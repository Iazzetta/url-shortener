import { connect } from "mongoose";
import { nanoid } from "nanoid";
import { RedirectShortenerRepository } from "../../../datalayer/contracts/redirect-shortener";
import { Shortener } from "../../../domain/entities/shortener";
import { Credentials } from "../../../presentation/helpers/credentials";
import { generateExpiration } from "../../../presentation/helpers/generate-expiration";
import { ShortenerSchema } from "./schemas/shortener";

export class MongooseRedirectShortenerRepository implements RedirectShortenerRepository {
    async redirect(short_url: string): Promise<any> {
        const db = await connect(Credentials.DatabaseURI);
        const shortened = await ShortenerSchema.findOne({ 
            "short_url": short_url 
        }).exec()
        db.disconnect()
        return shortened
    }
}