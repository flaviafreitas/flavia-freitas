import type { ComputedRef, InjectionKey } from 'vue'
import { settings } from '~/config/site'

export const siteContentKey: InjectionKey<ComputedRef<typeof settings>> = Symbol('siteContent')
export function useSiteContent() {
	return {
		site: inject(
			siteContentKey,
			computed(() => settings),
		),
	}
}
