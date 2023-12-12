import PropTypes from "prop-types";

const MembershipListItem = ({ text, icon, className, iconLink }) => {
	const listItemClasses =
		"text-left px-4 py-2 font-medium flex flex-row items-center even:bg-secondary/5 odd:bg-primary/5 border even:border-secondary even:border-opacity-25 odd:border-primary odd:border-opacity-10  rounded-md hover:scale-105 transition duration-200 ease-in-out hover:border-opacity-100  " +
		(className || "");

	return (
		<li className={listItemClasses}>
			{icon && <span className="mr-2">{icon}</span>}
			{iconLink && (
				<img className="mr-2 md:w-8 md:h-8" src={iconLink} alt="icon" />
			)}
			{text}
		</li>
	);
};

MembershipListItem.propTypes = {
	text: PropTypes.string.isRequired,
	icon: PropTypes.element,
	className: PropTypes.string,
	iconLink: PropTypes.string,
};

export default MembershipListItem;
