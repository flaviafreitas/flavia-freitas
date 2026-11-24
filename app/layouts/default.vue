<script setup lang="ts">
	import { SITE_SETTINGS_QUERY } from '~~/sanity/lib/queries'
	import { settings } from '~/config/site'

	const { data } = await useSanityFetch<Partial<typeof settings>>(
		'site-settings',
		SITE_SETTINGS_QUERY,
	)

	provide(
		siteContentKey,
		computed(() => ({ ...settings, ...data.value })),
	)
</script>
<template>
	<div class="portfolio type-body">
		<SiteHeader />
		<main
			id="principal"
			tabindex="-1"
		>
			<slot />
		</main>
		<SiteFooter />
	</div>
</template>
