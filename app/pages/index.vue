<script setup lang="ts">
	import { HOME_QUERY } from '~~/sanity/lib/queries'
	import { resolveHomeSections, type home } from '~/config/home'

	const { data } = await useSanityFetch<Partial<typeof home>>('home', HOME_QUERY)
	const sections = computed(() => resolveHomeSections(data.value))
	const { site } = useSiteContent()
	const {
		public: { siteUrl },
		app: { baseURL },
	} = useRuntimeConfig()
	const assetUrl = useAssetUrl()
	const canonical = siteUrl ? new URL(baseURL, siteUrl).href : undefined
	const socialImage = canonical ? new URL(assetUrl('interfaces.webp'), canonical).href : undefined
	const title = computed(() => site.value.name + ' | Design e desenvolvimento web')
	const description = computed(() => sections.value.hero.intro)
	const sectionsRoot = useTemplateRef<HTMLElement>('sectionsRoot')
	let observer: IntersectionObserver | undefined

	onMounted(() => {
		if (!sectionsRoot.value || !window.IntersectionObserver) return

		observer = new IntersectionObserver((entries, currentObserver) => {
			for (const { target, isIntersecting } of entries) {
				if (!isIntersecting) continue

				target.classList.add('section-entered')
				currentObserver.unobserve(target)
			}
		})

		const blocks = sectionsRoot.value.querySelectorAll(
			'.section > .label, .section > h2, .section-head, .projects > article, .about > *, .services > article, .steps > article, .contact',
		)
		blocks.forEach((block) => observer?.observe(block))
	})

	onBeforeUnmount(() => observer?.disconnect())

	useSeoMeta({
		title,
		description,
		ogTitle: title,
		ogDescription: description,
		ogType: 'website',
		ogLocale: 'pt_BR',
		ogUrl: canonical,
		ogImage: socialImage,
		ogImageAlt: socialImage
			? 'Composição de uma interface web e seu editor de código'
			: undefined,
		twitterCard: socialImage ? 'summary_large_image' : 'summary',
	})

	if (canonical) useHead({ link: [{ rel: 'canonical', href: canonical }] })
</script>

<template>
	<HomeHero :content="sections.hero" />
	<HomeSpecialties :content="sections.specialties" />
	<div ref="sectionsRoot">
		<HomeProjects :content="sections.projects" />
		<HomeAbout :content="sections.about" />
		<HomeServices :content="sections.services" />
		<HomeHowWorks :content="sections.howWorks" />
		<HomeCta :content="sections.cta" />
	</div>
</template>
