export default defineEventHandler((event) => {
	const {
		public: { siteUrl },
		app: { baseURL },
	} = useRuntimeConfig(event)
	if (!siteUrl) throw createError({ statusCode: 404 })

	const homeUrl = new URL(baseURL, siteUrl).href.replaceAll('&', '&amp;')
	setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
	return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url><loc>${homeUrl}</loc></url>
</urlset>`
})
