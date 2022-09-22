import { Credentials } from "./credentials";

export const generateExpiration = () => {
    const createdAt = new Date();
    const expiresAt = new Date(createdAt.getTime());
    expiresAt.setHours(createdAt.getHours() + Credentials.ExpirationHour);
    return [createdAt, expiresAt]
}