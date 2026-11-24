<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['howWorks'] }>()
</script>

<template>
	<section class="wrap section">
		<p class="label type-label">04 / Um processo claro</p>
		<h2 class="type-h2">{{ content.processTitle }}</h2>
		<div class="steps">
			<article
				v-for="(step, index) in content.steps"
				:key="step._key"
			>
				<small class="type-label">{{ String(index + 1).padStart(2, '0') }}</small>
				<h3 class="type-h3">{{ step.title }}</h3>
				<p>{{ step.text }}</p>
			</article>
		</div>
	</section>
</template>
