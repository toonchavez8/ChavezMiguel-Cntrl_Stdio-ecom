import PropTypes from "prop-types";
const CarouselTabs = ({ total, active }) => {
	return (
		<div className="flex justify-center gap-2 absolute inset-x-0 bottom-0 -translate-y-4">
			{Array.from({ length: total }).map((_, index) => (
				<div
					// eslint-disable-next-line react/no-array-index-key
					key={index}
					className={`w-4 h-4 bg-base-100  rounded-full   opacity-25 transition-all ease-in ${
						index === active ? "bg-primary opacity-100" : ""
					}`}
				></div>
			))}
		</div>
	);
};

CarouselTabs.propTypes = {
	total: PropTypes.number.isRequired,
	active: PropTypes.number.isRequired,
};

export default CarouselTabs;
