import { BannerItems } from '@/assets/data/type';
import { useRef, useState } from 'react';
import { bannerStyles } from './styles';

type SliderProps = {
	bannerItems: BannerItems[];
};
const TRANSITION_MS = 500;

function Slider({ bannerItems }: SliderProps) {
	const slides = bannerItems;
	const [current, setCurrent] = useState(0);
	const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);

	const [isDragging, setIsDragging] = useState(false);
	const [dragDelta, setDragDelta] = useState(0);

	const viewportRef = useRef<HTMLDivElement | null>(null);
	const dragStartX = useRef(0);

	const getViewportWidth = () => viewportRef.current?.clientWidth ?? 0;

	const next = () => {
		setIsTransitionEnabled(true);
		setCurrent((prev) => (prev >= slides.length - 1 ? 0 : prev + 1));
	};

	const prev = () => {
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
		} catch {}
		setIsDragging(false);

		const threshold = Math.max(50, getViewportWidth() * 0.15);

		if (Math.abs(dragDelta) > threshold) {
			dragDelta < 0 ? next() : prev();
		}

		setDragDelta(0);
		setIsTransitionEnabled(true);
	};

	return (
		<div className={bannerStyles.mainImage}>
			{/* 슬라이드 */}
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
					{slides.map((item, index) => (
						<div
							key={`${item.id}-${index}`}
							// className={bannerStyles.slideContainer({ total: slides.length })}
							className={bannerStyles.slideContainer}
						>
							<img
								src={item.images}
								alt={'Loading . . .'}
								className={bannerStyles.slideImage}
								draggable={false}
							/>
						</div>
					))}
				</div>
			</div>

			<button className={bannerStyles.arrowBtn({ side: 'left' })} onClick={prev}>
				◀
			</button>
			<button className={bannerStyles.arrowBtn({ side: 'right' })} onClick={next}>
				▶
			</button>

			<div className={bannerStyles.counter}>
				{current + 1} / {slides.length}
			</div>
		</div>
	);
}

export default Slider;
