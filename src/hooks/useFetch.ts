import { useEffect, useState } from 'react';

import type { ApiResponse } from '@/assets/data/type';

interface UseFetchParams {
	url: string | null;
	options?: RequestInit;
	enabled?: boolean;
}

export function useFetch<T>({ url, options, enabled = true }: UseFetchParams) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!url || !enabled) return;

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
	}, [url, options, enabled]);

	return { data, loading, error };
}

// //---- Promise return 방식------------------------

// export function useFetch2<T>({ url, options, enabled = true }: UseFetchParams) {
// 	const promiseRef = useRef<Promise<T> | null>(null);
// 	const statusRef = useRef<'pending' | 'success' | 'error'>('pending');
// 	const resultRef = useRef<T | null>(null);
// 	const errorRef = useRef<Error | null>(null);

// 	useEffect(() => {
// 		if (!url || !enabled) return;

// 		statusRef.current = 'pending';
// 		promiseRef.current = fetch(url, { ...options })
// 			.then(async (res) => {
// 				if (!res.ok) throw new Error(`Fetch 실패: ${res.status}`);
// 				const result: ApiResponse<T> = await res.json();
// 				statusRef.current = 'success';
// 				resultRef.current = result.data;
// 				return result.data;
// 			})
// 			.catch((err) => {
// 				statusRef.current = 'error';
// 				errorRef.current = err;
// 				throw err;
// 			});
// 	}, [url, options, enabled]);

// 	if (!promiseRef.current) {
// 		return null; // 또는 초기값 처리
// 	}

// 	// Suspense를 위한 처리
// 	if (statusRef.current === 'pending') {
// 		throw promiseRef.current;
// 	}

// 	// ErrorBoundary를 위한 처리
// 	if (statusRef.current === 'error') {
// 		throw errorRef.current;
// 	}

// 	return resultRef.current;
// }
