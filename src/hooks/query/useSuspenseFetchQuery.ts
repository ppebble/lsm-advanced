import { useSuspenseQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UseSuspenseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

/**
 *
 * @returns T - query 결과에 대한 타입
 * @description GET 요청을 처리하며, Suspense모드를 사용하는 react-query Query훅
 *  - react-query v4의 suspense: true 옵션과 동일한 기능
 *
 * @example
 * const { data: anyData, isLoading } = useSuspenseFetchQuery<AnyType>({
 * url : ANY_URL,
 * });
 */
export function useSuspenseFetchQuery<T>({ url }: UseSuspenseFetchQueryParams) {
	const query = useSuspenseQuery<T, Error>({
		queryKey: [url],
		queryFn: () => fetcher<T>(url),
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
