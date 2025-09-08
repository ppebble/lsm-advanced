import { useEffect, useRef, useCallback } from 'react';

/**
 * lazy loading을 위한  IntersectionOberserver 훅
 * usage :: 사용해야 하는 img 태그에 ref={refCallback} 과 data-src 속성 추가
 * @returns ref 콜백 함수
 */
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
