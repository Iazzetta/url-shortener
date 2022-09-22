import { Shortener } from "../../domain/entities/shortener";

export interface RedirectShortenerRepository {
    redirect: (short_url: string) => Promise<any>
}