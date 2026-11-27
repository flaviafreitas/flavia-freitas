<script setup lang="ts">
	const { site } = useSiteContent()
</script>

<template>
	<footer class="wrap">
		<div class="row">
			<SiteBrand />
			<div class="actions">
				<a :href="site.linkedin">
					LinkedIn
					<UiArrow direction="up-right" />
				</a>
				<a :href="site.github">
					GitHub
					<UiArrow direction="up-right" />
				</a>
			</div>
		</div>
		<small class="type-label">
			© {{ new Date().getFullYear() }} · {{ site.name }} · Portfólio pessoal
		</small>
	</footer>
</template>
