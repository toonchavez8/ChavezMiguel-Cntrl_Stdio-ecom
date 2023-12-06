import { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CarouselTabs from "./CarouselTabs.jsx";
import "./Carousel.css";

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	}, [setCurrentIndex, images.length]);

	const handleNext = useCallback(() => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	}, [setCurrentIndex, images.length]);

	const handleKeydown = useCallback(
		(event) => {
			if (event.key === "ArrowLeft") {
				handlePrev();
			} else if (event.key === "ArrowRight") {
				handleNext();
			}
		},
		[handlePrev, handleNext]
	);

	useEffect(() => {
		window.addEventListener("keydown", handleKeydown);

		return () => {
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [handleKeydown]);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						// Carousel is in view, add event listeners
						window.addEventListener("keydown", handleKeydown);
					} else {
						// Carousel is not in view, remove event listeners
						window.removeEventListener("keydown", handleKeydown);
					}
				});
			},
			{ threshold: 0.5 } // Adjust threshold as needed
		);

		const carouselElement = document.querySelector(".carousel");
		if (carouselElement) {
			observer.observe(carouselElement);
		}

		return () => {
			if (carouselElement) {
				observer.unobserve(carouselElement);
			}
		};
	}, [handleKeydown]);

	return (
		<section className="carousel-container relative">
			<figure className="carousel w-full h-128 bg-black relative">
				{images.map((image, index) => (
					<div
						key={image.src}
						className={`carousel-item relative w-full ${
							index === currentIndex ? "current" : "hidden"
						}`}
					>
						<img
							src={image.src}
							alt={image.alt}
							className="w-full object-cover opacity-75"
						/>
					</div>
				))}
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<button
						className="btn btn-circle w-4 lg:w-12  btn-outline btn-accent"
						onClick={handlePrev}
					>
						<FaChevronLeft />
					</button>
					<button
						className="btn btn-circle w-4 lg:w-12 btn-outline btn-accent"
						onClick={handleNext}
					>
						<FaChevronRight />
					</button>
				</div>
			</figure>
			<CarouselTabs total={images.length} active={currentIndex} />
		</section>
	);
};

Carousel.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			src: PropTypes.string.isRequired,
			alt: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default Carousel;
