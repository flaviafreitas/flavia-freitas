import type { PortfolioProject } from '../types/content'

export const home = {
	role: 'Engenheira de software full stack & web designer',
	headline: 'Design com alma.',
	accent: 'Código com propósito.',
	intro: 'Transformo ideias em sites e aplicações que unem identidade, experiência e desenvolvimento de ponta a ponta.',
	specialties: ['Design com intenção', 'Desenvolvimento full stack', 'Experiências digitais'],
	projectsTitle: 'Ideias que ganham forma e função.',
	projectsNote: 'Uma seleção de estudos conceituais em design e desenvolvimento.',
	projects: [
		{
			_type: 'project',
			_key: 'orbita',
			name: 'Órbita',
			tagline: 'Complexidade nos bastidores. Clareza em cada interação.',
			description:
				'Uma proposta de plataforma de gestão que conecta uma interface intuitiva à lógica de uma aplicação completa.',
			tags: 'Full stack · UI/UX · Aplicação web · Conceitual',
			illustration: 'orbita',
		},
		{
			_type: 'project',
			_key: 'lume',
			name: 'Lume',
			tagline: 'Aprender é ir além.',
			description:
				'Conceito de plataforma de educação que aproxima cursos, comunidade e descoberta em uma mesma experiência.',
			tags: 'Web design · Plataforma de educação · Conceitual',
			illustration: 'lume',
		},
		{
			_type: 'project',
			_key: 'forma',
			name: 'Forma',
			tagline: 'Ideias fora do óbvio.',
			description:
				'Estudo de um site institucional para um estúdio criativo, com tipografia expressiva e direção de arte editorial.',
			tags: 'UI/UX · Site institucional · Conceitual',
			illustration: 'forma',
		},
	] as PortfolioProject[],
	aboutCard: 'Olhar de designer.\nLógica de engenheira.',
	aboutTitle: 'Não é só sobre como fica. É sobre como funciona.',
	aboutText:
		'Sou engenheira de software full stack e web designer. Conecto a sensibilidade do design à estrutura do desenvolvimento para criar experiências digitais completas.\n\nDa primeira conversa à última interação, meu foco é o mesmo: transformar uma boa ideia em algo claro, útil e com personalidade.',
	skills: ['UI/UX', 'Front-end', 'Back-end', 'Design responsivo'],
	servicesTitle: 'Do conceito à tela. Da tela para o mundo.',
	services: [
		{
			_type: 'service',
			_key: 'design',
			title: 'Web design',
			text: 'Interfaces com identidade, hierarquia e intenção para transformar a sua presença digital em uma experiência.',
			detail: 'UI/UX · Prototipação · Responsividade',
		},
		{
			_type: 'service',
			_key: 'fullstack',
			title: 'Desenvolvimento full stack',
			text: 'Experiências completas, da interface à lógica do servidor. Forma e função trabalhando juntas.',
			detail: 'Front-end · Back-end · Integrações',
		},
		{
			_type: 'service',
			_key: 'sites',
			title: 'Sites & landing pages',
			text: 'Páginas que contam a sua história, apresentam o seu negócio e deixam claro o próximo passo.',
			detail: 'Sites institucionais · Páginas de conversão',
		},
	],
	processTitle: 'Boas experiências começam com uma conversa.',
	steps: [
		{
			_type: 'step',
			_key: 'entender',
			title: 'Entender',
			text: 'Escuto sua ideia, seu contexto e o que o projeto precisa resolver.',
		},
		{
			_type: 'step',
			_key: 'desenhar',
			title: 'Desenhar',
			text: 'Organizo a experiência e dou forma à direção visual.',
		},
		{
			_type: 'step',
			_key: 'desenvolver',
			title: 'Desenvolver',
			text: 'Transformo o design em uma experiência funcional e responsiva.',
		},
		{
			_type: 'step',
			_key: 'entregar',
			title: 'Colocar no mundo',
			text: 'Reviso os detalhes, testo os caminhos e preparo a entrega.',
		},
	],
	contactTitle: 'Sua próxima ideia merece ganhar vida.',
	contactText:
		'Um site, uma aplicação ou uma ideia ainda no papel. Vamos descobrir o que podemos construir juntas?',
}

export function resolveHomeSections(data?: Partial<typeof home> | null) {
	const page = { ...home, ...data }
	return {
		hero: { role: page.role, headline: page.headline, accent: page.accent, intro: page.intro },
		specialties: { specialties: page.specialties },
		projects: {
			projectsTitle: page.projectsTitle,
			projectsNote: page.projectsNote,
			projects: page.projects,
		},
		about: {
			aboutCard: page.aboutCard,
			aboutTitle: page.aboutTitle,
			aboutText: page.aboutText,
			skills: page.skills,
		},
		services: { servicesTitle: page.servicesTitle, services: page.services },
		howWorks: { processTitle: page.processTitle, steps: page.steps },
		cta: { contactTitle: page.contactTitle, contactText: page.contactText },
	}
}

export type HomeSections = ReturnType<typeof resolveHomeSections>
