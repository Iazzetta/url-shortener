import { Shortener } from "../../domain/entities/shortener";

export interface CreateShortenerRepository {
    create: (long_url: string) => Promise<Shortener>
}