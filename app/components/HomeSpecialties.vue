<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['specialties'] }>()

	const imageUrl = useAssetUrl()
	const paused = ref(false)
</script>

<template>
	<div
		v-if="content.specialties.length"
		class="strip"
	>
		<div
			class="strip-track"
			:class="{ 'is-paused': paused }"
		>
			<ul
				v-for="copy in 2"
				:key="copy"
				class="strip-list"
				:aria-hidden="copy === 2 ? true : undefined"
			>
				<li
					v-for="(item, index) in content.specialties"
					:key="index"
				>
					{{ item }}
					<img
						:src="imageUrl('asterisk.svg')"
						alt=""
						width="24"
						height="24"
					/>
				</li>
			</ul>
		</div>
		<button
			class="strip-control"
			type="button"
			:aria-label="paused ? 'Reproduzir carrossel' : 'Pausar carrossel'"
			@click="paused = !paused"
		>
			<span aria-hidden="true">{{ paused ? '▶' : 'Ⅱ' }}</span>
		</button>
	</div>
</template>
