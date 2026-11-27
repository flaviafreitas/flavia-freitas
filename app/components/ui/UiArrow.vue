<script setup lang="ts">
	withDefaults(defineProps<{ direction?: 'right' | 'up-right' }>(), {
		direction: 'right',
	})

	const paths = {
		right: 'M3.5 10h12.75m-5-5 5 5-5 5',
		'up-right': 'M5 15 15 5M6 5h9v9',
	}
</script>

<template>
	<svg
		class="ui-arrow"
		width="20"
		height="20"
		viewBox="0 0 20 20"
		fill="none"
		aria-hidden="true"
		focusable="false"
	>
		<path
			:d="paths[direction]"
			stroke="currentColor"
			stroke-width="1.65"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</svg>
</template>
