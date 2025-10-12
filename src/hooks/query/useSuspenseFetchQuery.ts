import type { UseQueryOptions } from '@tanstack/react-query';
import { useSuspenseQuery } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UseSuspenseFetchQueryParams<TData, TError = Error>
	extends Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'> {
	url: string;
}

/**
 *
 * @returns T - query 결과에 대한 타입
 * @description GET 요청을 처리하며, Suspense모드를 사용하는 react-query Query훅
 *  - react-query v4의 suspense: true 옵션과 동일한 기능
 *
 * @warning
 * - 해당 훅을 사용하고 suspense를 활성화 하지 않으면 컴포넌트가 무한로딩됨.
 * - suspense를 사용하지 않는 경우 useFetchQuery 훅으로 변경하여 사용해야함
 *
 * @example
 * const { data: anyData, isLoading } = useSuspenseFetchQuery<AnyType>({
 * url : ANY_URL,
 *  ...options
 * });
 *
 *  * @optional
 * enabled, select ... 등 useQueryOptions 사용 가능
 */
export function useSuspenseFetchQuery<TData>({
	url,
	...options
}: UseSuspenseFetchQueryParams<TData>) {
	const query = useSuspenseQuery<TData, Error>({
		queryKey: [url],
		queryFn: () => {
			return fetcher<TData>(url);
		},
		...options,
	});

	const { data, ...rest } = query;
	return { data, ...rest };
}
