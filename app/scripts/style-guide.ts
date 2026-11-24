import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue'
import { useHead } from '#imports'
import UiButton from '~/components/ui/UiButton.vue'
import UiBadge from '~/components/ui/UiBadge.vue'
import UiCard from '~/components/ui/UiCard.vue'
import UiAccordion from '~/components/ui/UiAccordion.vue'
import UiSectionHeading from '~/components/ui/UiSectionHeading.vue'

export default defineComponent({
	name: 'StyleGuidePage',
	components: { UiButton, UiBadge, UiCard, UiAccordion, UiSectionHeading },
	setup() {
		function guideClass(name: string) {
			return `style-guide-${name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()}`
		}

		useHead({
			title: 'Style guide · Flávia Freitas',
			meta: [{ name: 'robots', content: 'noindex, nofollow' }],
		})

		const sections = [
			{ id: 'cores', label: 'Cores' },
			{ id: 'tipografia', label: 'Tipografia' },
			{ id: 'botoes', label: 'Botões' },
			{ id: 'componentes', label: 'Componentes' },
			{ id: 'espacamento', label: 'Espaçamento' },
			{ id: 'uso', label: 'Como usar' },
		]

		const colors = [
			{ name: 'Lima', token: '--color-lime', role: 'Ações e destaques', dark: true },
			{ name: 'Coral', token: '--color-coral', role: 'Cards editoriais', dark: true },
			{
				name: 'Verde floresta',
				token: '--color-forest',
				role: 'Interfaces e painéis',
				dark: false,
			},
			{ name: 'Creme', token: '--color-cream', role: 'Texto principal', dark: true },
			{ name: 'Rosa', token: '--color-rose', role: 'Projetos conceituais', dark: true },
			{ name: 'Verde tinta', token: '--color-ink', role: 'Texto sobre acentos', dark: false },
			{ name: 'Preto', token: '--color-canvas', role: 'Fundo do site', dark: false },
			{ name: 'Grafite', token: '--color-panel', role: 'Superfícies', dark: false },
			{ name: 'Divisória', token: '--color-line', role: 'Bordas', dark: false },
			{ name: 'Cinza', token: '--color-muted', role: 'Texto secundário', dark: true },
		]

		const colorValues = ref<Record<string, string>>({})

		function colorValue(token: string) {
			return colorValues.value[token] || token
		}

		onMounted(() => {
			const styles = getComputedStyle(document.documentElement)
			const tokens = [...colors.map((color) => color.token), '--color-action']
			colorValues.value = Object.fromEntries(
				tokens.map((token) => [token, styles.getPropertyValue(token).trim().toUpperCase()]),
			)
		})

		const typeScale = [
			{
				name: 'Display',
				family: 'Manrope Semibold',
				size: '3–6',
				token: '--text-display',
				class: 'type-display',
				sample: 'Design com alma.',
			},
			{
				name: 'Título principal',
				family: 'Manrope Semibold',
				size: '3 / 3.6',
				token: '--text-h1',
				class: 'type-h1',
				sample: 'Código com propósito.',
			},
			{
				name: 'Título de seção',
				family: 'Manrope Semibold',
				size: '2.25–3.5',
				token: '--text-h2',
				class: 'type-h2',
				sample: 'Projetos selecionados',
			},
			{
				name: 'Título de card',
				family: 'Manrope Bold',
				size: '1.5 / 1.8',
				token: '--text-h3',
				class: 'type-h3',
				sample: 'Desenvolvimento full stack',
			},
			{
				name: 'Texto de destaque',
				family: 'Manrope Regular',
				size: '1.125 / 1.85625',
				token: '--text-body-lg',
				class: 'type-body-lg',
				sample: 'Do primeiro esboço à interface publicada.',
			},
			{
				name: 'Texto corrido',
				family: 'Manrope Regular',
				size: '1 / 1.65',
				token: '--text-body',
				class: 'type-body',
				sample: 'Desenho interfaces e desenvolvo os sistemas que dão vida a elas.',
			},
			{
				name: 'Texto de apoio',
				family: 'Manrope Regular',
				size: '0.875 / 1.44375',
				token: '--text-small',
				class: 'type-small',
				sample: 'Vue · Nuxt · TypeScript',
			},
			{
				name: 'Etiqueta',
				family: 'IBM Plex Mono',
				size: '0.6875 / 0.9625',
				token: '--text-label',
				class: 'type-label',
				sample: 'PROJETO SELECIONADO',
			},
		]

		const variants = ['primary', 'secondary', 'ghost'] as const
		const variantNames = {
			primary: 'Primário',
			secondary: 'Secundário',
			ghost: 'Texto',
		}

		const selectedVariant = ref<(typeof variants)[number]>('primary')
		const selectedSize = ref<'sm' | 'md' | 'lg'>('md')
		const buttonLabel = ref('Ver projeto')
		const buttonDisabled = ref(false)
		const loading = ref(false)
		const feedback = ref('')
		let feedbackTimer: ReturnType<typeof setTimeout> | undefined
		let loadingTimer: ReturnType<typeof setTimeout> | undefined

		function showFeedback(message: string) {
			feedback.value = message
			clearTimeout(feedbackTimer)
			feedbackTimer = setTimeout(() => {
				feedback.value = ''
			}, 3500)
		}

		async function copy(value: string, label = value) {
			try {
				await navigator.clipboard.writeText(value)
				showFeedback(`${label} copiado.`)
			} catch {
				showFeedback('Selecione e copie o texto manualmente.')
			}
		}

		function previewAction() {
			loading.value = true
			clearTimeout(loadingTimer)
			loadingTimer = setTimeout(() => {
				loading.value = false
				showFeedback('Pronto! O botão respondeu ao clique.')
			}, 1000)
		}

		onBeforeUnmount(() => {
			clearTimeout(feedbackTimer)
			clearTimeout(loadingTimer)
		})

		const spaceKeys = [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 24]

		const example = `<UiButton variant="primary" size="md" @click="abrirProjeto">
	Ver projeto
</UiButton>

<UiCard
	title="Web design"
	description="Interfaces responsivas para a web."
/>

<UiAccordion question="Como começa um projeto?">
	Com uma conversa sobre objetivos e conteúdo.
</UiAccordion>`

		const semanticColors = [
			['--color-background', 'Fundo da página'],
			['--color-text', 'Texto principal'],
			['--color-action', 'Ação principal'],
			['--color-border', 'Bordas e divisórias'],
		]

		const shapes = [
			{ name: 'Cantos pequenos', token: '--radius-sm', value: '8px' },
			{ name: 'Cards', token: '--radius-card', value: '16px' },
			{ name: 'Botões & badges', token: '--radius-pill', value: '100px' },
		]

		return {
			guideClass,
			colorValue,
			sections,
			colors,
			typeScale,
			variants,
			variantNames,
			selectedVariant,
			selectedSize,
			buttonLabel,
			buttonDisabled,
			loading,
			feedback,
			copy,
			previewAction,
			showFeedback,
			spaceKeys,
			example,
			semanticColors,
			shapes,
		}
	},
})
