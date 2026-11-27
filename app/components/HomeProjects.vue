<script setup lang="ts">
	import type { PortfolioProject } from '~/types/content'
	import type { HomeSections } from '~/config/home'

	defineProps<{ content: HomeSections['projects'] }>()

	const imageUrl = useAssetUrl()
	const modal = useTemplateRef<HTMLDialogElement>('projectDialog')
	const selected = ref<PortfolioProject>()
	const projectCover = (project: PortfolioProject) =>
		project.coverUrl ||
		(project.illustration ? imageUrl(`${project.illustration}.webp`) : undefined)

	async function openProject(project: PortfolioProject) {
		selected.value = project
		await nextTick()
		modal.value?.showModal()
	}
</script>

<template>
	<section
		id="projetos"
		class="wrap section"
	>
		<p class="label type-label">01 / Projetos selecionados</p>
		<div class="section-head">
			<h2 class="type-h2">{{ content.projectsTitle }}</h2>
			<p>{{ content.projectsNote }}</p>
		</div>
		<div class="projects">
			<article
				v-for="(project, i) in content.projects"
				:key="project._key"
				:class="{ featured: i === 0 }"
			>
				<div class="project-copy">
					<h3 class="type-h3">{{ project.name }}</h3>
					<strong>{{ project.tagline }}</strong>
					<p v-if="i === 0">{{ project.description }}</p>
					<small class="type-label">{{ project.tags }}</small>
					<a
						v-if="project.link"
						class="project-link"
						:href="project.link"
					>
						Ver projeto
						<UiArrow direction="up-right" />
					</a>
					<button
						v-else
						class="project-link"
						@click="openProject(project)"
					>
						Explorar conceito
						<UiArrow />
					</button>
				</div>
				<div
					v-if="projectCover(project)"
					class="project-media"
				>
					<img
						class="cover"
						:src="projectCover(project)"
						:alt="'Prévia de ' + project.name"
						loading="lazy"
					/>
				</div>
			</article>
		</div>
		<dialog
			ref="projectDialog"
			aria-labelledby="project-title"
		>
			<div v-if="selected">
				<form method="dialog">
					<button aria-label="Fechar prévia">Fechar ×</button>
				</form>
				<img
					v-if="projectCover(selected)"
					class="cover"
					:src="projectCover(selected)"
					:alt="'Prévia de ' + selected.name"
				/>
				<h2
					class="type-h2"
					id="project-title"
				>
					{{ selected.name }}
				</h2>
				<p>{{ selected.description }}</p>
				<small class="type-label">{{ selected.tags }}</small>
			</div>
		</dialog>
	</section>
</template>
