import { HttpResponse } from "./http";

export interface CreateShortenerController {
    handle: (long_url: string) => Promise<HttpResponse>
}

export interface RedirectShortenerController {
    handle: (short_url: string) => Promise<HttpResponse>
}