import express from 'express'
import { notFound } from '../../../presentation/contracts/response';
import { Credentials } from '../../../presentation/helpers/credentials';
import { makeCreateShortenerController } from '../../factories/mongodb/create-shortener';
import { makeRedirectShortenerController } from '../../factories/mongodb/redirect-shortener';
import { RedisManager } from './controllers/redis';
import os from 'os';

// express
const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// redis
const redisManager = new RedisManager({
    url: Credentials.RedisUrl
})


/**
 * @api {post} /shorten Shorten long url
 * @apiName Shorten
 * @apiGroup Shortener
 *
 * @apiParam {String} long_url Long url to shorten
 *
 * @apiSuccess {String} long_url Long url
 * @apiSuccess {String} short_url Shorted URL
 * @apiSuccess {String} expiresAt Url expiration date
 * @apiSuccess {String} createdAt Creation date
 */
app.post('/shorten', async (req: express.Request, res:express.Response) => {
    const long_url = req.body.long_url;
    const controller = makeCreateShortenerController()
    const httpResponse = await controller.handle(long_url)
    res.status(httpResponse.statusCode).json(httpResponse.data)
});

/**
 * @api {get} /:short_url Redirect to long url
 * @apiName Redirect Shortener
 * @apiGroup Shortener
 *
 * @apiParam {String} short_url Short url to redirect
 * 
 * @apiSuccess {String} long_url Redirect to long_url
 */
 app.get('/:short_url', async (req: express.Request, res:express.Response) => {
    const short_url = req.params.short_url;
    const controller = makeRedirectShortenerController()
    const cachedURL = await redisManager.get(short_url);
    if (cachedURL) {
        res.status(301).redirect(cachedURL);
    } else {
        const httpResponse = await controller.handle(`${Credentials.PrefixUrl}${short_url}`)
        if (httpResponse.statusCode == 200){
            await redisManager.set(short_url, httpResponse.data);
            res.status(301).redirect(httpResponse.data);
        }
        else
            res.status(404).json(notFound("URL not found"))
    }
});

const api = app.listen(Credentials.Port, async () => {
    console.log(`Running at http://${os.hostname()}:${Credentials.Port}`)
})

export default api;