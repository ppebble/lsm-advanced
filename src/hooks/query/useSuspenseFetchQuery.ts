import { useSuspenseQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FeachResult';

interface UseSuspenseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

export function useSuspenseFetchQuery<T>({ url }: UseSuspenseFetchQueryParams) {
	const query = useSuspenseQuery<T, Error>({
		queryKey: [url],
		queryFn: () => fetcher<T>(url),
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
