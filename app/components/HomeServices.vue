<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['services'] }>()

	const imageUrl = useAssetUrl()
</script>

<template>
	<section
		id="servicos"
		class="band"
	>
		<div class="wrap section">
			<p class="label type-label">03 / Como posso ajudar</p>
			<h2 class="type-h2">{{ content.servicesTitle }}</h2>
			<div class="services">
				<article
					v-for="(service, index) in content.services"
					:key="service._key"
				>
					<div class="row">
						<small class="type-label">
							{{ String(index + 1).padStart(2, '0') }}
						</small>
						<img
							:src="imageUrl('arrow-service.svg')"
							alt=""
						/>
					</div>
					<h3 class="type-h3">{{ service.title }}</h3>
					<p>{{ service.text }}</p>
					<small class="type-label">{{ service.detail }}</small>
				</article>
			</div>
		</div>
	</section>
</template>
