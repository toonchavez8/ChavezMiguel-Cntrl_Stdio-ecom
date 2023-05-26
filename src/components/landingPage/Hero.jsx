import "./Hero.css";
import { useEffect, useState } from "react";
import heroImg from "../../assets/landing/Hero_Banner.png";
import PropTypes from "prop-types";
import { AiOutlineArrowRight } from "react-icons/ai";

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
			<div className="absolute text-center z-10 text-white uppercase  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<h1 className="ff-libre-baskerville text-5xl  ">{heroTagline}</h1>
				<div className="ff-nunito ">
					<button className="border-2 text-white uppercase px-4 py-2 rounded mt-4">
						Conoce el estudio
						<AiOutlineArrowRight className="inline-block ml-2" />
					</button>

					<button className="border-2 text-white uppercase px-4 py-2 rounded mt-4 ml-4">
						Nuestro Trabajo
						<AiOutlineArrowRight className="inline-block ml-2" />
					</button>
				</div>
			</div>
			<figure className="bg-black">
				<img
					src={heroImg}
					alt="hero banner"
					className="max-h-96 w-full object-cover opacity-50"
				/>
			</figure>
		</section>
	);
}

Hero.propTypes = {
	heroTaglines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
