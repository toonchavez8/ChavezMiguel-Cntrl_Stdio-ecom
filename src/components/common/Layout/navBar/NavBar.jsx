import { useEffect, useState } from "react";
import "./NavBar.css";
import centralLogo from "/Logo_CE.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner.jsx";

export default function NavBar() {
	const [navbarBg, setNavbarBg] = useState(false);
	const navigate = useNavigate();
	const location = useLocation();
	const scrollDelay = 400; // Adjust the delay if necessary to let the page content load and then scroll to the contact section

	const [loadingSpinner, setLoadingSpinner] = useState(true);

	// a function to add bg color to navbar on scroll
	useEffect(() => {
		const handleScroll = () => {
			const isNavbarScrolled = window.scrollY >= 100; // Adjust the scroll position threshold as needed
			setNavbarBg(isNavbarScrolled);
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Function to handle the contact section click event, either navigate to the homepage and then scroll to the contact section after a delay, or just scroll to the contact section directly

	const handleContactClick = () => {
		// If already on the homepage, just scroll to the contact section
		if (location.pathname === "/") {
			document
				.getElementById("contact-section")
				.scrollIntoView({ block: "start" });
		} else {
			setLoadingSpinner(true);
			// Navigate to the homepage and then create a location state with the scrollToContact property, which will trigger the useEffect hook to scroll to the contact section
			navigate("/", { state: { scrollToContact: true } });
		}
	};

	useEffect(() => {
		// if the location state has a scrollToContact property, use setTimeout to ensure the page content is fully loaded and then scroll to the contact section

		if (location.state?.scrollToContact) {
			// if scrollto contact is true create a loading animation and then scroll to the contact section

			// Use setTimeout to ensure the page content is fully loaded
			setTimeout(() => {
				document
					.getElementById("contact-section")
					.scrollIntoView({ behavior: "smooth" });
				setLoadingSpinner(false);
			}, scrollDelay); // Adjust the delay if necessary to let the page content load and then scroll to the contact section

			// Clear the state after handling the scroll
			window.history.replaceState({}, document.title);
		}
	}, [location]);

	return (
		<>
			<header
				className={` drawer z-50 fixed transition-all duration-75 font-normal ease-in-out  ${
					navbarBg
						? "bg-gradient-to-b from-[#0611e5] from-05% to-transparent bg-opacity-100 text-white"
						: "bg-opcacity-0 text-primary"
				}`}
			>
				{/* Drawer Toggle */}
				<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
				{/* Desktop Navbar */}
				<div className="flex flex-col w-full px-4 drawer-content ff-nunito">
					{/* Navbar */}
					<nav className="flex flex-row justify-between w-full align-baseline transition bg-scroll lg:navbar bg-none lg:mt-0 lg:pt-0 ">
						<div className="mx-4 lg:hidden">
							<label
								htmlFor="my-drawer-3"
								className="btn btn-square btn-ghost stroke-primary"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									className="inline-block w-6 h-6 stroke-current"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									></path>
								</svg>
							</label>
						</div>
						<Link
							to={"/"}
							className="p-0 rounded-none btn btn-primary lg:h-28 aspect-square lg:ms-28 sm:me-auto"
						>
							<img src={centralLogo} alt="Logo" className="my-auto" />
						</Link>
						<div className="hidden mx-auto uppercase lg:block">
							<ul className="gap-1 menu menu-horizontal">
								{/* Navbar menu content here */}
								<li className="">
									<details className="rounded ">
										<summary className=" fill-secondary hover:text-secondary">
											<Link to={"/renta"}>Renta</Link>
										</summary>
										<ul className="p-2 bg-primary text-primary ">
											<li className="hover:text-secondary">
												<Link className="" to={"renta/estudio"}>
													Estudio
												</Link>
											</li>
											<li className="">
												<Link className="" to={"renta/foro"}>
													Foro
												</Link>
											</li>
											<li className="">
												<Link className="" to={"renta/cocina"}>
													cocina
												</Link>
											</li>
											<li className="">
												<Link className="" to={"renta"}>
													Equipo
												</Link>
											</li>
										</ul>
									</details>
								</li>

								<li className="hover:text-secondary">
									<Link to={"/servicios"} className="inherit">
										servicios
									</Link>
								</li>
								<li>
									<Link to={"/ciclorama"}>Cicloramas</Link>
								</li>
							</ul>
						</div>

						<div className="hidden uppercase lg:block">
							<ul className="menu menu-horizontal">
								{/* Navbar menu content here */}
								<button
									onClick={() => handleContactClick()}
									className="px-5 border-2 btn btn-secondary btn-outline "
								>
									contacto
								</button>
							</ul>
						</div>
						<div className="hidden grid-flow-col gap-4 px-0 lg:grid fill-secondary md:px-10 ">
							{/* fb svg */}
							<Link
								to="https://www.facebook.com/centralestudio"
								target="blank"
								className="fill-secondary "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-se hover:fill-accent"
								>
									<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
								</svg>
							</Link>
							{/* ig svg */}
							<Link
								to="https://www.instagram.com/centralestudio/"
								target="blank"
								className="fill-secondary hover:text-accent "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-secondary hover:fill-accent"
								>
									{/* ig svg */}

									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</Link>

							{/* whatsapp */}
							<Link
								to="https://wa.link/ygwmm6"
								target="blank"
								className="fill-secondary hover:text-accent "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-se hover:fill-accent"
								>
									<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
								</svg>
							</Link>
						</div>
					</nav>
				</div>
				{/* Mobile Menu */}
				<div className="drawer-side">
					<label
						htmlFor="my-drawer-3"
						className="drawer-overlay"
						aria-label="Close navigation drawer"
					></label>
					<ul className="h-full gap-4 p-4 text-white uppercase menu w-80 bg-primary">
						<li className="items-center">
							<img
								src={centralLogo}
								alt="central logo"
								className="object-cover object-center w-40 h-20 p-0 "
								style={{ objectPosition: "0 -45px" }}
							/>
						</li>

						<li>
							<details className="fill-secondary ">
								<summary className="hover:text-primary">Renta</summary>
								<ul className="p-2 ">
									<li>
										<Link to={"/renta/estudio"}>Estudio</Link>
									</li>
									<li>
										<Link to={"/renta/foro"}>Foro</Link>
									</li>
									<li>
										<Link to={"/renta/cocina"}>cocina</Link>
									</li>
									<li>
										<Link to={"/renta"}>Equipo</Link>
									</li>
								</ul>
							</details>
						</li>
						<li>
							<Link to={"/servicios"}>servicios</Link>
						</li>
						<li>
							<Link to={"/ciclorama"}>Cicloramas</Link>
						</li>
						<span className="flex-1"></span>
						<div className="grid justify-between grid-flow-col gap-4 px-0 fill-secondary md:px-10 ">
							{/* fb svg */}
							<Link
								to="https://www.facebook.com/centralestudio"
								target="blank"
								className="fill-secondary "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-se hover:fill-accent"
								>
									<path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
								</svg>
							</Link>
							{/* ig svg */}
							<Link
								to="https://www.instagram.com/centralestudio/"
								target="blank"
								className="fill-secondary hover:text-accent "
							>
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-secondary hover:fill-accent"
								>
									{/* ig svg */}

									<path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
								</svg>
							</Link>

							{/* whatsapp */}
							<Link
								to="https://wa.link/ygwmm6"
								target="blank"
								className="fill-secondary hover:text-accent "
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									className="fill-se hover:fill-accent"
								>
									<path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
								</svg>
							</Link>
						</div>
						<button
							id="contacto"
							onClick={() => handleContactClick()}
							className="border-2 btn btn-secondary btn-outline"
						>
							contacto
						</button>
					</ul>
				</div>
			</header>

			{loadingSpinner && <LoadingSpinner />}
		</>
	);
}
