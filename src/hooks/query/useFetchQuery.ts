import type { UseQueryOptions } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UseFetchQueryParams<TData, TError = Error>
	extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
	url: string;
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
export function useFetchQuery<TData>({ url, ...options }: UseFetchQueryParams<TData>) {
	const query = useQuery<TData, Error>({
		queryKey: [url],
		queryFn: () => fetcher<TData>(url),
		...options,
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
