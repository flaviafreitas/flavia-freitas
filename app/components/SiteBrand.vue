<script setup lang="ts">
	const { site } = useSiteContent()
</script>

<template>
	<a
		class="brand"
		href="#principal"
	>
		{{ site.name }}
	</a>
</template>
