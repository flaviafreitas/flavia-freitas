import { defineField } from 'sanity'
export const field = (name: string, title: string, type = 'string', group?: string) =>
	defineField({ name, title, type, group, validation: (rule) => rule.required() })
