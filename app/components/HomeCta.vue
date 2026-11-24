<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['cta'] }>()

	const imageUrl = useAssetUrl()
	const { site } = useSiteContent()
</script>

<template>
	<section
		id="contato"
		class="wrap"
	>
		<div class="contact">
			<p class="label type-label">05 / O próximo projeto pode ser o seu</p>
			<div class="row">
				<h2 class="type-display">{{ content.contactTitle }}</h2>
				<a
					class="round"
					:href="'mailto:' + site.email"
					aria-label="Conversar sobre um projeto"
				>
					<img
						:src="imageUrl('arrow-contact.svg')"
						alt=""
					/>
				</a>
			</div>
			<p>{{ content.contactText }}</p>
			<a
				class="email"
				:href="'mailto:' + site.email"
			>
				{{ site.email }}
				<img
					:src="imageUrl('arrow-email.svg')"
					alt=""
				/>
			</a>
		</div>
	</section>
</template>
