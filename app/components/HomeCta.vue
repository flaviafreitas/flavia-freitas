<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['cta'] }>()

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
					<UiArrow direction="up-right" />
				</a>
			</div>
			<p>{{ content.contactText }}</p>
			<a
				class="email"
				:href="'mailto:' + site.email"
			>
				{{ site.email }}
				<UiArrow direction="up-right" />
			</a>
		</div>
	</section>
</template>
