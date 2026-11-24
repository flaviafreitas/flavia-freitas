<script setup lang="ts">
	const imageUrl = useAssetUrl()
</script>

<template>
	<a
		class="skip"
		href="#principal"
	>
		Pular para o conteúdo
	</a>

	<header class="wrap navigation">
		<SiteBrand />
		<nav aria-label="Navegação principal">
			<a href="#projetos">Projetos</a>
			<a href="#sobre">Sobre</a>
			<a href="#servicos">Serviços</a>
			<a href="#contato">Contato</a>
		</nav>
		<UiButton
			variant="secondary"
			href="#contato"
		>
			Vamos conversar
			<img
				:src="imageUrl('arrow-light.svg')"
				alt=""
			/>
		</UiButton>
	</header>
</template>
