import { useSuspenseQuery } from '@tanstack/react-query';

interface UseSuspenseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

export function useSuspenseFetchQuery<TData>({ url }: UseSuspenseFetchQueryParams) {
	return useSuspenseQuery<TData, Error>({
		queryKey: [url],
		queryFn: async () => {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Fetch 실패: ${res.status}`);
			const result = await res.json();
			return result.data;
		},
	});
}
