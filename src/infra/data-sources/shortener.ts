import { nanoid } from 'nanoid'
import { Credentials } from '../../presentation/helpers/credentials'

export const fakeShortener = [
    {
        long_url: "https://github.com/Iazzetta",
        short_url: `${Credentials.PrefixUrl}${nanoid(Credentials.MaxBytesShortUrl)}`,
        expiresAt: new Date("2022-09-23T20:00:00.000Z"),
        createdAt: new Date("2022-09-22T20:00:00.000Z"),
    }
]