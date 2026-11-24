<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['about'] }>()
</script>

<template>
	<section
		id="sobre"
		class="wrap section"
	>
		<p class="label type-label">02 / Quem está por trás</p>
		<div class="about">
			<div class="poster">
				<small class="type-label">Dois olhares. A mesma curiosidade.</small>
				<b>{{ content.aboutCard }}</b>
				<small class="type-label">Pensar. Desenhar. Desenvolver.</small>
			</div>
			<div>
				<h2 class="type-h2">{{ content.aboutTitle }}</h2>
				<p class="bio">{{ content.aboutText }}</p>
				<div class="tags">
					<UiBadge
						tone="outline"
						v-for="skill in content.skills"
						:key="skill"
					>
						{{ skill }}
					</UiBadge>
				</div>
			</div>
		</div>
	</section>
</template>
