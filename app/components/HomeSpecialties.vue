<script setup lang="ts">
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['specialties'] }>()

	const imageUrl = useAssetUrl()
</script>

<template>
	<div class="strip">
		<div class="wrap">
			<span
				v-for="item in content.specialties"
				:key="item"
			>
				{{ item }}
				<img
					:src="imageUrl('asterisk.svg')"
					alt=""
				/>
			</span>
		</div>
	</div>
</template>
