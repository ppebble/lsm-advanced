import { ApiResponse } from '@/assets/data/type';
import { useEffect, useState } from 'react';

export function useFetch<T>(url: string | null, options?: RequestInit) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!url) return; // url이 없으면 실행 안 함

		const fetchData = async () => {
			setLoading(true);
			setError(null);

			try {
				const res = await fetch(url, options);

				if (!res.ok) {
					throw new Error(`Fetch 실패: ${res.status}`);
				}

				const result: ApiResponse<T> = await res.json();
				setData(result.data);
			} catch (err: any) {
				setError(err.message ?? 'Unknown error');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
}
