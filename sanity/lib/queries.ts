export const HOME_QUERY = `*[_id == "homePage"][0] {
	...,
	projects[] {
		...,
		"coverUrl": cover.asset->url
	}
}`

export const SITE_SETTINGS_QUERY = `*[_id == "siteSettings"][0]`
