export default defineEventHandler((event) => {
	const {
		public: { siteUrl },
		app: { baseURL },
	} = useRuntimeConfig(event)
	const sitemap = siteUrl
		? `Sitemap: ${new URL('sitemap.xml', new URL(baseURL, siteUrl)).href}\n`
		: ''

	setResponseHeader(event, 'Content-Type', 'text/plain; charset=utf-8')
	return `User-agent: *\nAllow: /\n${sitemap}`
})
