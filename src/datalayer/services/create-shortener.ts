import { Shortener } from "../../domain/entities/shortener";
import { CreateShortener } from "../../domain/usecases/create-shortener";
import { CreateShortenerRepository } from "../contracts/create-shortener";

export class CreateShortenerService implements CreateShortener {
    constructor(
        private readonly createShortenerRepository: CreateShortenerRepository
    ) {}

    async create(long_url: string): Promise<Shortener> {
        return this.createShortenerRepository.create(long_url)
    }
}