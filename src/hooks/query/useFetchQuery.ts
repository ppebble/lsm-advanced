import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

/**
 *
 * @returns T - query 결과에 대한 타입
 * @description GET 요청을 처리하는 react-query Query 훅
 *
 * @example
 * const { data: anyData, isLoading } = useFetchQuery<AnyType>({
 * url : ANY_URL,
 * });
 */
export function useFetchQuery<T>({ url, enabled = true }: UseFetchQueryParams) {
	const query = useQuery<T, Error>({
		queryKey: [url],
		queryFn: () => fetcher<T>(url),
		enabled,
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
