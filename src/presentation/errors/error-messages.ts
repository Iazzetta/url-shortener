import { Credentials } from "../helpers/credentials";

export class ErrorMessages  {
    static LongUrlMaxSizeExceeded = `Your url has exceeded 
        the maximum length of ${Credentials.MaxBytesLongUrl} characters.`
    static ShortUrlMaxSizeExceeded = `Your url has exceeded 
        the maximum length of ${Credentials.MaxBytesFullShortUrl} characters.`
}