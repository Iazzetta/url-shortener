import { createClient, RedisFunctions, RedisModules, RedisScripts } from "redis";

const env = process.env['ENV'] || false;

export class RedisManager {
    client: any

    constructor(config: any) {
        if (env == 'production'){
            this.client = createClient(config);
            this.client.on('error', (err: any) => console.log('Redis Client Error', err));
            this.startRedis()
        }
    }

    startRedis = async () => {
        if (env == 'production') await this.client.connect();
    }

    get = async (key: any) => {
        return (env == 'production') ? await this.client.get(key):false
    }

    set = async (key: any, value: any) => {
        return (env == 'production') ? await this.client.set(key, value):false
    }
}