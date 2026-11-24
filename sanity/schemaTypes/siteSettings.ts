import { defineType } from 'sanity'
import { settings } from '../../app/config/site'
import { field } from './field'

export const siteSettings = defineType({
	name: 'siteSettings',
	title: 'Dados do site',
	type: 'document',
	initialValue: settings,
	fields: [
		field('name', 'Nome'),
		field('email', 'E-mail', 'email'),
		field('github', 'GitHub', 'url'),
		field('linkedin', 'LinkedIn', 'url'),
	],
})
