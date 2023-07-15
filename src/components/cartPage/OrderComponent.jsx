import PropTypes from "prop-types";

const OrderComponet = ({ orderId }) => {
	return (
		<main className=" flex flex-col justify-center items-center mt-16 py-4 px-6 rounded-md ">
			<section className="mt-6 h-full  rounded-lg border bg-white p-6 shadow-md ">
				<h1 className="text-xl font-semibold">¡Esta es tu orden!</h1>
				<p className="text-lg mt-2">Orden ID: {orderId}</p>
			</section>
		</main>
	);
};

export default OrderComponet;

OrderComponet.propTypes = {
	orderId: PropTypes.string,
};
