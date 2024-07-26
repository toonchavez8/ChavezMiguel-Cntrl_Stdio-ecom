import PropTypes from "prop-types";
import { Link } from "react-router-dom";

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
		<Link
			to={link}
			className="transition duration-200 ease-in-out hover:scale-105 "
		>
			<article className="flex flex-col items-center justify-center max-w-sm gap-4 lg:w-96 ff-barlow ">
				<img
					src={imageSrc}
					alt={title}
					className="object-cover w-full rounded max-h-64"
				/>
				<div className="flex flex-row justify-between w-full gap-2 align-baseline ">
					<div className="flex flex-col p-0 m-0 ">
						<h3 className="text-xl font-semibold leading-tight text-stone-900">
							{title}
						</h3>
						<small className="leading-tight text-stone-900">{area}</small>
						<p className="leading-tight text-stone-900">{operationHours}</p>
					</div>
					<p className="flex flex-col items-center justify-center gap-0 btn btn-primary text-base-100 ">
						{price}
						{subLine ? (
							<span className="text-xs text-base-300 ">{subLine}</span>
						) : (
							""
						)}
					</p>
				</div>
			</article>
		</Link>
	);
};

SpaceCard.propTypes = {
	imageSrc: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	area: PropTypes.string.isRequired,
	operationHours: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
	price: PropTypes.string,
	link: PropTypes.string,
	subLine: PropTypes.string,
};

export default SpaceCard;
