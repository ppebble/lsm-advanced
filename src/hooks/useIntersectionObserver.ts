import { useEffect, useRef } from 'react';

interface ImageElementType extends Element {
	src?: String | null;
	style?: String | null;
}

export const useIntersectionObserver = () => {
	const imgRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const img = entry.target.getAttribute('data-src');
					const imgElement: ImageElementType = entry.target;
					imgElement.src = img;
					observer.unobserve(imgElement);
				}
			});
		});
		if (imgRef.current) {
			observer.observe(imgRef.current);
		}
	}, [imgRef]);
	return { ref: imgRef };
};
