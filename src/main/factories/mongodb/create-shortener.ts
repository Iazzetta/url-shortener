import { CreateShortenerService } from "../../../datalayer/services/create-shortener"
import { MongooseCreateShortenerRepository } from "../../../infra/repositories/mongoose/create-shortener"
import { CreateShortenerController } from "../../../presentation/contracts/controller"
import { HandleCreateShortenerController } from "../../../presentation/controllers/create-shortener"

export const makeCreateShortenerController = (): CreateShortenerController => {
    const repo = new MongooseCreateShortenerRepository()
    const loader = new CreateShortenerService(repo)
    return new HandleCreateShortenerController(loader)
}