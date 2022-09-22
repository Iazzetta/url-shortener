import { CreateShortenerService } from "../../../datalayer/services/create-shortener"
import { FakeCreateShortenerRepository } from "../../../infra/repositories/fakedb/create-shortener"
import { CreateShortenerController } from "../../../presentation/contracts/controller"
import { HandleCreateShortenerController } from "../../../presentation/controllers/create-shortener"

export const makeFakeCreateShortenerController = (): CreateShortenerController => {
    const repo = new FakeCreateShortenerRepository()
    const loader = new CreateShortenerService(repo)
    return new HandleCreateShortenerController(loader)
}