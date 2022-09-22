import { RedirectShortenerService } from "../../../datalayer/services/redirect-shortener"
import { MongooseRedirectShortenerRepository } from "../../../infra/repositories/mongoose/redirect-shortener"
import { RedirectShortenerController } from "../../../presentation/contracts/controller"
import { HandleRedirectShortenerController } from "../../../presentation/controllers/redirect-shortener"

export const makeRedirectShortenerController = (): RedirectShortenerController => {
    const repo = new MongooseRedirectShortenerRepository()
    const loader = new RedirectShortenerService(repo)
    return new HandleRedirectShortenerController(loader)
}