import { useState } from "react";
import PropTypes from "prop-types";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Carousel = ({ images }) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handlePrev = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const handleNext = () => {
		setCurrentIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<figure className="carousel w-full h-128 bg-black relative">
			{images.map((image, index) => (
				<div
					key={index.src}
					className={`carousel-item relative w-full ${
						index === currentIndex ? "" : "hidden"
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
				<button className="btn btn-circle" onClick={handlePrev}>
					<AiOutlineArrowLeft />
				</button>
				<button className="btn btn-circle" onClick={handleNext}>
					<AiOutlineArrowRight />
				</button>
			</div>
		</figure>
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
