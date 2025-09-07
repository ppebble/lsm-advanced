import { ApiResponse } from '@/assets/data/type';

type Status = 'pending' | 'success' | 'error';

function createResource<T>(promise: Promise<T>) {
	let status: Status = 'pending';
	let result: T;
	let error: any;

	const suspender = promise.then(
		(res) => {
			status = 'success';
			result = res;
		},
		(err) => {
			status = 'error';
			error = err;
		},
	);

	return {
		read(): T {
			if (status === 'pending') {
				throw suspender; // Suspense fallback으로 이동
			} else if (status === 'error') {
				throw error; // ErrorBoundary fallback으로 이동
			}
			return result!;
		},
	};
}

const resourceCache = new Map<string, ReturnType<typeof createResource<any>>>();

interface UseFetchParams {
	url: string | null;
	options?: RequestInit;
	enabled?: boolean;
}

export function useFetch<T>({ url, options, enabled = true }: UseFetchParams) {
	if (!url || !enabled) {
		throw new Promise(() => {}); // Suspense에 걸리지 않도록 noop Promise
	}

	if (!resourceCache.has(url)) {
		const fetchPromise = fetch(url, options)
			.then((res) => {
				if (!res.ok) {
					throw new Error(`Fetch 실패: ${res.status}`);
				}
				return res.json() as Promise<ApiResponse<T>>;
			})
			.then((json) => json.data);

		resourceCache.set(url, createResource<T>(fetchPromise));
	}

	const resource = resourceCache.get(url)!;
	return resource.read();
}
