/* eslint-disable @typescript-eslint/no-throw-literal */
import { useEffect, useState } from 'react';

import type { ApiResponse } from '@/assets/data/type';

interface UseFetchParams {
	url: string | null;
	options?: RequestInit;
	enabled?: boolean;
}

export function useFetch<T>({ url, options, enabled = true }: UseFetchParams) {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string | null>(null);
	const [promise, setPromise] = useState<Promise<void> | null>(null);

	useEffect(() => {
		if (!url || !enabled) return;

		const fetchData = async () => {
			setError(null);

			try {
				const res = await fetch(url, options);
				if (!res.ok) {
					throw new Error(`Fetch 실패: ${res.status}`);
				}

				const result: ApiResponse<T> = await res.json();
				setData(result.data);
			} catch (err: any) {
				setError(err);
			}
		};

		const fetchPromise = fetchData();
		setPromise(fetchPromise);
	}, [url, options, enabled]);
	if (promise && !data && !error) {
		throw promise;
	}
	if (error) {
		throw error;
	}

	return { data };
}
