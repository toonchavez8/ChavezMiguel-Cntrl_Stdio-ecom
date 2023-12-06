import { useState, useEffect, useRef, useCallback } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import PropTypes from "prop-types";

const CicloramaWidget = ({ ciclromaData }) => {
	const [selectedRoll, setSelectedRoll] = useState(ciclromaData[0]);
	const [activeIndex, setActiveIndex] = useState(0);
	const rollContainerRef = useRef(null);

	const handleRollSelect = useCallback(
		(index) => {
			setSelectedRoll(ciclromaData[index]);
			setActiveIndex(index);
			rollContainerRef.current.scrollTop = index * 50; // Adjust the scroll amount as needed
		},
		[ciclromaData]
	);
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % ciclromaData.length);
			handleRollSelect(activeIndex);
		}, 3000);

		return () => clearInterval(interval);
	}, [ciclromaData.length, activeIndex, handleRollSelect]);

	const handleScroll = (direction) => {
		const scrollAmount = 200; // Adjust the scroll amount as needed
		if (direction === "up") {
			rollContainerRef.current.scrollTop -= scrollAmount;
		} else {
			rollContainerRef.current.scrollTop += scrollAmount;
		}
	};

	return (
		<article className="ff-nunito flex flex-col justify-center items-center w-full max-w-xl prose debug">
			<figure className="flex flex-col-reverse lg:flex-row w-full justify-center items-center">
				<div className="flex  lg:flex-col w-full justify-center items-center max-w-md prose ff-nunito px-4">
					<AiOutlineCaretUp
						className=" -rotate-90 lg:rotate-0 cursor-pointer mx-auto min-w-max"
						size={30}
						onClick={() => handleScroll("up")}
					/>
					<div
						ref={rollContainerRef}
						className=" flex flex-row lg:flex-col gap-0 overflow-hidden lg:h-80 max-h-xl  overflow-x-scroll lg:overflow-y-scroll  no-scrollbar relative"
					>
						{ciclromaData.map((data, index) => (
							<img
								key={data.title}
								src={data.roll}
								alt={`Roll ${data.title}`}
								role="presentation"
								className={` cursor-pointer max-h-20 aspect-w-4 aspect-h-5 ${
									index === activeIndex ? "border-2 rounded bg-primary" : ""
								}`}
								onClick={() => handleRollSelect(index)}
							/>
						))}
					</div>
					<AiOutlineCaretDown
						className=" -rotate-90 lg:rotate-0 cursor-pointer mx-auto min-w-max"
						size={30}
						onClick={() => handleScroll("down")}
					/>
				</div>

				<img
					src={selectedRoll.ciclroma}
					alt={`Ciclorama ${selectedRoll.title}`}
					className="max-h-96 w-full  object-cover debug flex-1 "
				/>
			</figure>

			<div className="text-center -mt-16 px-2">
				<h3 className="text-fuchsia-500 text-2xl font-bold leading-7">
					Fondos suaves y uniformes con colores únicos
				</h3>
				<p className="text-stone-900 text-xl font-normal leading-7">
					Los cicloramas miden
					<span className="text-blue-700 text-xl font-bold leading-7">
						{" "}
						2.72 x 11 metros
					</span>
					, proporcionándote espacio de sobra para dar vida a tus producciones
					audiovisuales.
				</p>
			</div>
		</article>
	);
};

CicloramaWidget.propTypes = {
	ciclromaData: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			roll: PropTypes.string.isRequired,
			ciclroma: PropTypes.string.isRequired,
		})
	).isRequired,
};

export default CicloramaWidget;
