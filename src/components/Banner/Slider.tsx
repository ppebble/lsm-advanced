import { ErrorBoundary, Suspense } from '@suspensive/react';
import { useRef, useState } from 'react';

import type { BannerItems } from '@/assets/data/type';
import { useSuspenseFetchQuery } from '@/hooks/query/useSuspenseFetchQuery';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { SERVICE_URLS } from '@/utils/ServiceUrls';
import { css } from 'styled-system/css';

import { ErrorFallback } from '../common/fallback';
import { Skeleton } from '../common/skeleton';

import { bannerStyles } from './styles';

const TRANSITION_MS = 500;

const Slider = () => {
	const refCallback = useIntersectionObserver();
	const { data: bannerItems } = useSuspenseFetchQuery<BannerItems[]>({ url: SERVICE_URLS.banners });

	const slides = bannerItems || [];
	const [current, setCurrent] = useState(0);
	const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

	const [isDragging, setIsDragging] = useState(false);
	const [dragDelta, setDragDelta] = useState(0);

	const viewportRef = useRef<HTMLDivElement | null>(null);
	const dragStartX = useRef(0);

	const [isLoading, setIsLoading] = useState(true);

	const getViewportWidth = () => viewportRef.current?.clientWidth ?? 0;

	const handleNext = () => {
		setIsTransitionEnabled(true);
		setCurrent((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
	};

	const handlePrev = () => {
		setIsTransitionEnabled(true);
		setCurrent((prev) => (prev <= 0 ? slides.length - 1 : prev - 1));
	};

	const onPointerDown = (e: React.PointerEvent) => {
		(e.currentTarget as Element).setPointerCapture(e.pointerId);
		setIsDragging(true);
		dragStartX.current = e.clientX;
		setDragDelta(0);
		setIsTransitionEnabled(false);
	};

	const onPointerMove = (e: React.PointerEvent) => {
		if (!isDragging) return;
		const delta = e.clientX - dragStartX.current;
		setDragDelta(delta);
	};

	const onPointerUp = (e: React.PointerEvent) => {
		try {
			(e.currentTarget as Element).releasePointerCapture(e.pointerId);
		} catch (err) {
			console.error(err);
		}
		setIsDragging(false);

		const threshold = Math.max(50, getViewportWidth() * 0.15);

		if (Math.abs(dragDelta) > threshold) {
			if (dragDelta < 0) {
				handleNext();
			} else {
				handlePrev();
			}
		}

		setDragDelta(0);
		setIsTransitionEnabled(true);
	};

	return (
		<div className={bannerStyles.mainImage}>
			<div
				ref={viewportRef}
				style={{ width: '100%', height: '100%' }}
				onPointerDown={onPointerDown}
				onPointerMove={onPointerMove}
				onPointerUp={onPointerUp}
				onPointerCancel={onPointerUp}
			>
				<div
					ref={null}
					style={{
						display: 'flex',
						width: `${slides.length * 100}%`,
						transform: `translateX(calc(${-current * 100}% + ${dragDelta}px))`,
						transition:
							isDragging || !isTransitionEnabled ? 'none' : `transform ${TRANSITION_MS}ms ease`,
					}}
				>
					{slides.map((item) => (
						<div
							key={`${item.id}`}
							// className={bannerStyles.slideContainer({ total: slides.length })}
							className={bannerStyles.slideContainer}
						>
							{isLoading && (
								<Skeleton
									className={css({
										position: 'absolute',
										inset: 0,
									})}
								/>
							)}
							<img
								ref={refCallback}
								data-src={item.images}
								onLoad={() => setIsLoading(false)}
								// src={item.images}
								alt={item.id}
								className={bannerStyles.slideImage}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>

			<button
				type='button'
				className={bannerStyles.arrowBtn({ side: 'left' })}
				onClick={handlePrev}
			>
				◀
			</button>
			<button
				type='button'
				className={bannerStyles.arrowBtn({ side: 'right' })}
				onClick={handleNext}
			>
				▶
			</button>

			<div className={bannerStyles.counter}>
				{current + 1} / {slides.length}
			</div>
		</div>
	);
};

export default Slider;
