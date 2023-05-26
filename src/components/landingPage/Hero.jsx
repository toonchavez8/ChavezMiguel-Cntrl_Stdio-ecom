import { useEffect, useState } from "react";
import heroImg from "../../assets/landing/Hero_Banner.png";
import PropTypes from "prop-types";

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
		<section className="relative">
			<h1 className="absolute text-center z-10 text-white uppercase text-3xl ff-nunito w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				{heroTagline}
			</h1>
			<figure className="bg-black">
				<img
					src={heroImg}
					alt="hero banner"
					className="h-96 w-full object-cover opacity-75"
				/>
			</figure>
		</section>
	);
}

Hero.propTypes = {
	heroTaglines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
