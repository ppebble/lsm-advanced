import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UsePostMutationParams<TParam, TData, TError = Error> {
	url: string;
	options?: Omit<UseMutationOptions<TData, TError, TParam>, 'mutationFn'>;
}

/**
 *
 * @param TParam - mutation 인자값에 대한 타입
 * @returns TData - mutation 결과에 대한 타입
 * @param TError - mutation 에러에 대한 타입 (기본값: Error)
 * @description POST 요청을 처리하는 react-query Mutation 훅
 *
 * @example
 * const { mutate: postAny } = usePostMutation<AnyResponse, AnyParams>({
 *   url: ANY_URL,
 * });
 *  ...
 * postAny({
 *   id: AnyParams.id,
 * 	...
 * })
 */
export function usePostMutation<TData = unknown, TParam = unknown, TError = Error>({
	url,
	options,
}: UsePostMutationParams<TParam, TData, TError>): UseMutationResult<TData, TError, TParam> {
	const mutation = useMutation<TData, TError, TParam>({
		mutationFn: async (param: TParam) => {
			return fetcher<TData>(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(param),
			});
		},
		...options,
	});

	return mutation;
}
