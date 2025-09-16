import { useQuery } from '@tanstack/react-query';

interface UseFetchQueryParams {
	url: string;
	enabled?: boolean;
}

export function useFetchQuery<TData>({ url, enabled = true }: UseFetchQueryParams) {
	return useQuery<TData, Error>({
		queryKey: [url],
		queryFn: async () => {
			const res = await fetch(url);
			if (!res.ok) throw new Error(`Fetch 실패: ${res.status}`);
			const result = await res.json();
			return result.data;
		},
		enabled,
	});
}
