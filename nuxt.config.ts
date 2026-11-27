const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || ''

export default defineNuxtConfig({
	compatibilityDate: '2026-10-29',
	devtools: { enabled: false },
	css: ['~/assets/scss/global.scss'],
	runtimeConfig: {
		public: {
			siteUrl,
			sanityProjectId: process.env.NUXT_PUBLIC_SANITY_PROJECT_ID || 'bwvknndw',
			sanityDataset: process.env.NUXT_PUBLIC_SANITY_DATASET || 'production',
			sanityApiVersion: process.env.NUXT_PUBLIC_SANITY_API_VERSION || '2026-10-14',
		},
	},
	app: {
		head: {
			htmlAttrs: { lang: 'pt-BR' },
			title: 'Flávia Freitas | Design e desenvolvimento web',
		},
	},
	routeRules: {
		'/studio': { ssr: false, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
		'/studio/**': { ssr: false, headers: { 'X-Robots-Tag': 'noindex, nofollow' } },
	},
	nitro: {
		prerender: { routes: ['/studio', '/robots.txt', ...(siteUrl ? ['/sitemap.xml'] : [])] },
	},
})
