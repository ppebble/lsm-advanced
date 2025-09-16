import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

interface UseFetchQueryParams<T> {
	url: string | null;
	options?: RequestInit;
	enabled?: boolean;
	reactQueryOptions?: Omit<
		UseQueryOptions<T, Error, T>,
		'queryKey' | 'queryFn' | 'enabled' | 'suspense'
	>;
}

export const useFetchQuery = <T>({
	url,
	options,
	enabled,
	reactQueryOptions,
}: UseFetchQueryParams<T>) => {
	const query = useQuery<T, Error>({
		queryKey: url ? [url] : [''],
		queryFn: async () => {
			if (!url) throw new Error('URL is null');
			const res = await fetch(url, options);
			if (!res.ok) {
				const error = new Error(`HTTP ERROR ${res.status}`);
				(error as any).status = res.status;
				throw error;
			}
			const result = await res.json();
			return result.data as T;
		},
		enabled: enabled && !!url,
		...reactQueryOptions,
	});
	return { ...query };
};
