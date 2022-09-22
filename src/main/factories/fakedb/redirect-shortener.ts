import { RedirectShortenerService } from "../../../datalayer/services/redirect-shortener"
import { FakeRedirectShortenerRepository } from "../../../infra/repositories/fakedb/redirect-shortener"
import { RedirectShortenerController } from "../../../presentation/contracts/controller"
import { HandleRedirectShortenerController } from "../../../presentation/controllers/redirect-shortener"

export const makeFakeRedirectShortenerController = (): RedirectShortenerController => {
    const repo = new FakeRedirectShortenerRepository()
    const loader = new RedirectShortenerService(repo)
    return new HandleRedirectShortenerController(loader)
}