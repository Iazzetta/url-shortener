export interface RedirectShortener {
    redirect: (short_url: string) => Promise<any>
}