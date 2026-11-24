import { defineArrayMember, defineField, defineType } from 'sanity'
import { home } from '../../app/config/home'
import { field } from './field'

const labels = {
	hero: 'Apresentação',
	projects: 'Projetos',
	about: 'Sobre mim',
	services: 'Serviços',
	process: 'Processo',
	contact: 'Contato',
}
const strings = (name: string, title: string, group: string) =>
	defineField({ name, title, type: 'array', group, of: [{ type: 'string' }] })

export const homePage = defineType({
	name: 'homePage',
	title: 'Página inicial',
	type: 'document',
	initialValue: home,
	groups: Object.entries(labels).map(([name, title]) => ({ name, title })),
	preview: { prepare: () => ({ title: 'Página inicial' }) },
	fields: [
		field('role', 'Identificação profissional', 'string', 'hero'),
		field('headline', 'Título', 'string', 'hero'),
		field('accent', 'Título em lima', 'string', 'hero'),
		field('intro', 'Introdução', 'text', 'hero'),
		strings('specialties', 'Faixa de especialidades', 'hero'),
		field('projectsTitle', 'Título da seção', 'string', 'projects'),
		field('projectsNote', 'Introdução dos projetos', 'text', 'projects'),
		defineField({
			name: 'projects',
			title: 'Projetos em ordem de exibição',
			group: 'projects',
			type: 'array',
			of: [
				defineArrayMember({
					type: 'object',
					name: 'project',
					fields: [
						field('name', 'Nome'),
						field('tagline', 'Chamada'),
						field('description', 'Descrição', 'text'),
						field('tags', 'Áreas e categoria'),
						defineField({
							name: 'illustration',
							title: 'Ilustração do portfólio',
							type: 'string',
							options: { list: ['orbita', 'lume', 'forma'] },
						}),
						defineField({
							name: 'cover',
							title: 'Imagem de capa personalizada',
							type: 'image',
						}),
						defineField({
							name: 'link',
							title: 'Link externo do projeto',
							type: 'url',
						}),
					],
					preview: { select: { title: 'name', subtitle: 'tagline', media: 'cover' } },
				}),
			],
		}),
		field('aboutCard', 'Texto do cartão', 'text', 'about'),
		field('aboutTitle', 'Título', 'string', 'about'),
		field('aboutText', 'Apresentação', 'text', 'about'),
		strings('skills', 'Habilidades', 'about'),
		field('servicesTitle', 'Título', 'string', 'services'),
		field('processTitle', 'Título', 'string', 'process'),
		...(['services', 'steps'] as const).map((name) =>
			defineField({
				name,
				title: name === 'services' ? 'Serviços' : 'Etapas',
				group: name === 'services' ? 'services' : 'process',
				type: 'array',
				of: [
					defineArrayMember({
						type: 'object',
						name: name === 'services' ? 'service' : 'step',
						fields: [
							field('title', 'Título'),
							field('text', 'Descrição', 'text'),
							...(name === 'services' ? [field('detail', 'Especialidades')] : []),
						],
					}),
				],
			}),
		),
		field('contactTitle', 'Título', 'string', 'contact'),
		field('contactText', 'Convite', 'text', 'contact'),
	],
})
