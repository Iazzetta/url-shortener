import { connect } from "mongoose";
import { RedirectShortenerRepository } from "../../../datalayer/contracts/redirect-shortener";
import { Credentials } from "../../../presentation/helpers/credentials";
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