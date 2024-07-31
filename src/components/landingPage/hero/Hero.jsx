import "./Hero.css";
import { useEffect, useState } from "react";
import heroImg from "../../../assets/landing/Hero_Banner.png";
import estudio from "../../../assets/landing/Estudio-1.png";
import ForoImg from "../../../assets/landing/Foro-1.jpg";
import PropTypes from "prop-types";

import Carousel from "../../common/Carusel/Carusel.jsx";

export default function Hero(
	{ heroTaglines } // heroTaglines is an array of strings
) {
	// switch hero taglines	every 3 seconds
	const [taglineIndex, setTaglineIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTaglineIndex((taglineIndex) =>
				taglineIndex === heroTaglines.length - 1 ? 0 : taglineIndex + 1
			);
		}, 3000);
		return () => clearInterval(interval);
	}, [heroTaglines.length]);

	const heroTagline = heroTaglines[taglineIndex];

	return (
		<section className="relative w-full transition-all ease">
			<div className="absolute  flex flex-col w-[16rem] md:w-[28rem] lg:w-[48rem] top-1/2 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-white uppercase transition-all duration-300 ease-in-out">
				<h1 className="text-xl text-left whitespace-pre-line ff-barlow sm:text-4xl lg:text-6xl">
					<span dangerouslySetInnerHTML={{ __html: heroTagline }} />
				</h1>
			</div>
			<Carousel
				images={[
					{ src: heroImg, alt: "Hero Banner" },
					{
						src: estudio,
						alt: "Hero Banner",
					},
					{
						src: ForoImg,
						alt: "Hero Banner",
					},
				]}
			/>
		</section>
	);
}

Hero.propTypes = {
	heroTaglines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
