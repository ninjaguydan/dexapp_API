export async function Fetch(url) {
	try {
		const response = await fetch(url)
		if (!response.ok) {
			console.error("Response for Pokemon not OK")
			return
		}
		const json = await response.json()
		return json
	} catch (error) {
		console.error("Response for Pokemon not found")
	}
}
