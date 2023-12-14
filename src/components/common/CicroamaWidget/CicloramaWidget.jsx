import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import PropTypes from "prop-types";

const CicloramaWidget = ({ ciclromaData }) => {
	const [selectedRoll, setSelectedRoll] = useState(ciclromaData[0]);
	const [isHovered, setIsHovered] = useState(false);

	const handleRollSelect = (index) => {
		setSelectedRoll(ciclromaData[index]);
	};

	return (
		<article className="ff-nunito flex flex-col justify-center items-center w-full max-w-xl prose ">
			<figure
				className="flex flex-col-reverse lg:flex-row w-full justify-center items-center relative group"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
			>
				<div className="flex  lg:flex-col w-full justify-center items-center max-w-md prose ff-nunito px-4">
					<AiOutlineCaretUp
						className=" -rotate-90 lg:rotate-0 cursor-pointer mx-auto min-w-max"
						size={30}
					/>
					<div className="flex flex-row lg:flex-col gap-2 m-0 p-0 lg:gap-0 overflow-x-scroll lg:overflow-y-scroll lg:h-80  max-h-xl no-scrollbar ">
						{ciclromaData.map((data, index) => (
							<img
								key={data.title}
								src={data.roll}
								alt={`Roll ${data.title}`}
								role="presentation"
								className={` cursor-pointer  max-h-20 aspect-w-4 aspect-h-5 ${
									index === ciclromaData.indexOf(selectedRoll)
										? "border-2 rounded bg-primary"
										: ""
								}`}
								onClick={() => handleRollSelect(index)}
							/>
						))}
					</div>
					<AiOutlineCaretDown
						className=" -rotate-90 lg:rotate-0 cursor-pointer mx-auto min-w-max"
						size={30}
					/>
				</div>
				{isHovered && (
					<div className="badge badge-accent  md:badge-outline opacity-0 group-hover:opacity-100 font-bold transition-all ease absolute inset-x-auto bottom-1/3 md:top-0  md:left-1/2 px-4 py-3 md:text-lg ">
						{selectedRoll.title}
					</div>
				)}
				<img
					src={selectedRoll.ciclroma}
					alt={`Ciclorama ${selectedRoll.title}`}
					className="max-h-96 w-full  object-cover  flex-1 "
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
