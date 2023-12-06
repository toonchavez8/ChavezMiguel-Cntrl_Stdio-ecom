import PropTypes from "prop-types";

const SpaceCard = ({
	imageSrc,
	title,
	area,
	operationHours,
	price,
	link,
	subLine,
}) => {
	return (
		<a
			href={link}
			className="hover:scale-105 transition duration-200 ease-in-out "
		>
			<article className=" max-w-sm lg:w-96 flex flex-col justify-center items-center gap-4 ff-barlow px-4 py-4 ">
				<img
					src={imageSrc}
					alt={title}
					className="rounded max-h-64 w-full object-cover"
				/>
				<div className="flex flex-row justify-center  gap-2 align-baseline">
					<div className="flex flex-col  gap-0 m-0 p-0">
						<h3 className="text-2xl font-semibold text-stone-900">{title}</h3>
						<small className="text-stone-900">{area}</small>
						<p className="text-stone-900">{operationHours}</p>
					</div>
					<p className="btn btn-primary flex flex-col justify-center items-center text-base-100 gap-0 ">
						{price}
						{subLine ? (
							<span className=" text-xs text-base-300">{subLine}</span>
						) : (
							""
						)}
					</p>
				</div>
			</article>
		</a>
	);
};

SpaceCard.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	operationHours: PropTypes.string.isRequired,
	price: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	subLine: PropTypes.string,
};

export default SpaceCard;
