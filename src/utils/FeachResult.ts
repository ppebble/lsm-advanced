export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
	const res = await fetch(url, options);
	if (!res.ok) throw new Error(`Fetch 실패: ${res.status}`);
	const result = await res.json();
	return result.data;
}
