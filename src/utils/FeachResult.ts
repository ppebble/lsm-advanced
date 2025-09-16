type FetchResult<T> = {
	data: T;
	// 필요하면 다른 속성 추가 가능 (예: status, refetch)
};

export async function fetcher<T>(url: string, options?: RequestInit): Promise<T> {
	const res = await fetch(url, options);
	if (!res.ok) throw new Error(`Fetch 실패: ${res.status}`);
	const result = await res.json();
	return result.data;
}
