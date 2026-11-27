<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['hero'] }>()

	const imageUrl = useAssetUrl()
</script>

<template>
	<section class="wrap hero">
		<p class="label type-label">
			<img
				:src="imageUrl('accent.svg')"
				alt=""
			/>
			{{ content.role }}
		</p>
		<div class="hero-grid">
			<h1 class="type-display">
				{{ content.headline }}
				<em>{{ content.accent }}</em>
			</h1>
			<img
				class="interfaces"
				:src="imageUrl('interfaces.webp')"
				alt="Composição de uma interface web e seu editor de código"
				width="420"
				height="355"
			/>
		</div>
		<p class="intro type-body-lg">{{ content.intro }}</p>
		<div class="actions">
			<UiButton href="#projetos">
				Explore meus projetos
				<UiArrow />
			</UiButton>
			<UiButton
				variant="secondary"
				href="#sobre"
			>
				Sobre mim
				<UiArrow />
			</UiButton>
		</div>
	</section>
</template>
