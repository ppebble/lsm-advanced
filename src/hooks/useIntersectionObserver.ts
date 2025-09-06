import { useEffect, useRef, useCallback } from 'react';

export const useIntersectionObserver = () => {
	const observerRef = useRef<IntersectionObserver | null>(null);

	useEffect(() => {
		observerRef.current = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const img = entry.target as HTMLImageElement;
						const src = img.getAttribute('data-src');
						if (src) {
							img.src = src;
							observerRef.current?.unobserve(img);
						}
					}
				});
			},
			{ threshold: 0.1, rootMargin: '50px 0px' },
		);

		return () => {
			console.log('delete');
			observerRef.current?.disconnect();
		};
	}, []);

	// useCallback을 사용해 ref 콜백 반환
	const observe = useCallback((el: HTMLImageElement | null) => {
		if (el && observerRef.current) {
			const src = el.getAttribute('data-src');
			if (src && !el.src) {
				observerRef.current.observe(el);
			}
		}
	}, []);

	return observe;
};
