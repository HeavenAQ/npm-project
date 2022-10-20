import React, {
	useState,
	useEffect,
	useCallback,
	useRef,
	ReactNode,
} from "react";
import { DotButton } from "../components/CarouselButtons";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay, { AutoplayType } from "embla-carousel-autoplay";
import { isChinese, Language } from "../utils/utils";
import { Media } from "../sass/scss/images/intro/IntroMedia";

interface Carousel {
	slides: ReactNode[];
	mediaByIndex(i: number): Media;
	lang: Language;
}

const Carousel: React.FC<Carousel> = ({
	slides,
	mediaByIndex,
	lang,
}): JSX.Element => {
	const autoplay = useRef<AutoplayType>(
		Autoplay({ delay: 3000, stopOnInteraction: false })
	);

	const [viewportRef, embla] = useEmblaCarousel(
		{ skipSnaps: false, loop: false },
		[autoplay.current]
	);
	const [selectedIndex, setSelectedIndex] = useState<number>(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const toScrollIndex = useCallback(
		(index: number) => embla && embla.scrollTo(index),
		[embla]
	);

	const onSelect = useCallback(() => {
		if (!embla) return;
		setSelectedIndex(embla.selectedScrollSnap());
	}, [embla, selectedIndex]);

	const carouselSnaps = scrollSnaps.map((_, i) => (
		<DotButton
			key={i}
			enabled={i === selectedIndex}
			onClick={() => toScrollIndex(i)}
		/>
	));

	const slideContent = slides.map((_, index) => (
		<div className="embla__slide" key={index}>
			<div className="embla__slide--inner">
				<img
					className="embla__slide__img"
					src={mediaByIndex(index).media}
					alt="item-img"
				/>
				<p>{mediaByIndex(index).name}</p>
			</div>
		</div>
	));

	useEffect(() => {
		if (!embla) return;
		onSelect();
		setScrollSnaps(embla.scrollSnapList());
		embla.on("select", onSelect);
	}, [embla, setScrollSnaps, onSelect]);

	return (
		<>
			<div className="embla">
				<h2>{!isChinese(lang) ? "限量小禮" : "Limited Prizes"}</h2>
				<div className="embla__viewport" ref={viewportRef}>
					<div className="embla__container">{slideContent}</div>
				</div>
				<div className="embla__dots">{carouselSnaps}</div>
			</div>
		</>
	);
};
export default Carousel;
