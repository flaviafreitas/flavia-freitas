export function useAssetUrl() {
	const base = useRuntimeConfig().app.baseURL
	return (file: string) => `${base}images/${file}`
}
