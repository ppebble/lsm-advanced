import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FeachResult';

interface UseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

export function useFetchQuery<T>({ url, enabled = true }: UseFetchQueryParams) {
	const query = useQuery<T, Error>({
		queryKey: [url],
		queryFn: () => fetcher<T>(url),
		enabled,
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
