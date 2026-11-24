<script setup lang="ts">
	const imageUrl = useAssetUrl()
	const { site } = useSiteContent()
</script>

<template>
	<footer class="wrap">
		<div class="row">
			<SiteBrand />
			<div class="actions">
				<a :href="site.linkedin">
					LinkedIn
					<img
						:src="imageUrl('arrow-social.svg')"
						alt=""
					/>
				</a>
				<a :href="site.github">
					GitHub
					<img
						:src="imageUrl('arrow-social.svg')"
						alt=""
					/>
				</a>
			</div>
		</div>
		<small class="type-label">
			© {{ new Date().getFullYear() }} · {{ site.name }} · Portfólio pessoal
		</small>
	</footer>
</template>
