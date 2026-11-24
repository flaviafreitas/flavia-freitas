<script setup lang="ts">
	import { HOME_QUERY } from '~~/sanity/lib/queries'
	import { resolveHomeSections, type home } from '~/config/home'

	const { data } = await useSanityFetch<Partial<typeof home>>('home', HOME_QUERY)
	const sections = computed(() => resolveHomeSections(data.value))
	const { site } = useSiteContent()

	useSeoMeta({
		title: () => site.value.name + ' | Design e desenvolvimento',
		description: () => sections.value.hero.intro,
	})
</script>

<template>
	<HomeHero :content="sections.hero" />
	<HomeSpecialties :content="sections.specialties" />
	<HomeProjects :content="sections.projects" />
	<HomeAbout :content="sections.about" />
	<HomeServices :content="sections.services" />
	<HomeHowWorks :content="sections.howWorks" />
	<HomeCta :content="sections.cta" />
</template>
