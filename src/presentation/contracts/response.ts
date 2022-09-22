import { ServerError } from "../errors/server-error"
import { UnauthorizedError } from "../errors/unauthorized-error"
import { HttpResponse } from "./http"

export const success = (data: any): HttpResponse => ({
    statusCode: 200,
    data: data
})

export const badRequest = (message: string): HttpResponse => ({
    statusCode: 400,
    data: message
})

export const notFound = (message: string): HttpResponse => ({
    statusCode: 404,
    data: message
})

export const forbidden = (message: string): HttpResponse => ({
    statusCode: 403,
    data: message
})

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    data: new UnauthorizedError()
})

export const serverError = (message: string): HttpResponse => ({
    statusCode: 500,
    data: new ServerError(message)
})