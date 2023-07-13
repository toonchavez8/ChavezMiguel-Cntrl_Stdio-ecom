import "./Hero.css";
import { useEffect, useState } from "react";
import heroImg from "../../../assets/landing/Hero_Banner.png";
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
		<section className="relative ">
			<div className="absolute  z-10  text-white uppercase   inset-auto top-0 left-1/4  translate-y-full  ">
				<h1 className="ff-libre-baskerville  min-h-fit  text-xl  sm:text-4xl lg:text-6xl  whitespace-pre-line ">
					{heroTagline}
				</h1>
				<div className="flex gap-3 flex-col sm:flex-row ff-nunito pt-5 ">
					<button className="btn btn-outline btn-primary border-2 group">
						Conoce el estudio
						<AiOutlineArrowRight className="inline-block ml-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-1" />
					</button>

					<button className="btn btn-outline btn-secondary border-2 group">
						Nuestro Trabajo
						<AiOutlineArrowRight className="inline-block ml-2 transform transition-transform duration-300 group-hover:scale-125 group-hover:translate-x-1" />
					</button>
				</div>
			</div>

			<figure className=" carousel w-full h-128 bg-black ">
				<div id="slide1" className="carousel-item relative w-full">
					<img src={heroImg} className="w-full object-cover opacity-75" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide4" className="btn btn-circle">
							❮
						</a>
						<a href="#slide2" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide2" className="carousel-item relative w-full">
					<img src={heroImg} className="w-full object-cover opacity-75" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide1" className="btn btn-circle">
							❮
						</a>
						<a href="#slide3" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide3" className="carousel-item relative w-full">
					<img src={heroImg} className="w-full object-cover opacity-75" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide2" className="btn btn-circle">
							❮
						</a>
						<a href="#slide4" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
				<div id="slide4" className="carousel-item relative w-full">
					<img src={heroImg} className="w-full object-cover opacity-75" />
					<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
						<a href="#slide3" className="btn btn-circle">
							❮
						</a>
						<a href="#slide1" className="btn btn-circle">
							❯
						</a>
					</div>
				</div>
			</figure>
		</section>
	);
}

Hero.propTypes = {
	heroTaglines: PropTypes.arrayOf(PropTypes.string).isRequired,
};
