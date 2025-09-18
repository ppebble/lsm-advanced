import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { useMutation } from '@tanstack/react-query';

import { fetcher } from '@/utils/FetchResult';

interface UsePostMutationParams<TParam, TData, TError = Error> {
	url: string;
	options?: Omit<UseMutationOptions<TData, TError, TParam>, 'mutationFn'>;
}

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
