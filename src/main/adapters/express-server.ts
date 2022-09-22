import express from 'express'
import { notFound } from '../../presentation/contracts/response';
import { Credentials } from '../../presentation/helpers/credentials';
import { makeCreateShortenerController } from '../factories/mongodb/create-shortener';
import { makeRedirectShortenerController } from '../factories/mongodb/redirect-shortener';

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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
    const httpResponse = await controller.handle(`${Credentials.PrefixUrl}${short_url}`)
    if (httpResponse.statusCode == 200)
        res.status(301).redirect(httpResponse.data);
    else
        res.status(404).json(notFound("URL not found"))
});

const api = app.listen(Credentials.EXPRESS_PORT, async () => {
    console.log(`Running at http://localhost:${Credentials.EXPRESS_PORT}`)
})

export default api;