import { useEffect, useState } from "react";
import "./NavBar.css";

import centralLogo from "/Logo_CE.png";
import { Link } from "react-router-dom";
export default function NavBar() {
	// create a function to add bg color to navbar on scroll

	const [navbarBg, setNavbarBg] = useState(false);

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

	return (
		<header
			className={`drawer z-50 fixed transition-all duration-300 ease-in-out ${
				navbarBg
					? "bg-gradient-to-b  from-[#0611e5] from-05% to-transparent bg-opacity-100"
					: "bg-opcacity-0"
			}`}
		>
			<input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col ff-nunito text-white px-4">
				{/* Navbar */}
				<nav className="w-full navbar bg-none bg-scroll transition mt-0 pt-0 ">
					<div className="flex-none lg:hidden mx-4">
						<label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
						className="btn btn-primary p-0 rounded-none h- lg:h-28 aspect-square ms-0  lg:ms-28 sm:me-auto"
					>
						<img src={centralLogo} alt="Logo" className="mx-auto w-full" />
					</Link>
					<div className="hidden lg:block uppercase  mx-auto">
						<ul className="menu menu-horizontal gap-1">
							{/* Navbar menu content here */}
							<li>
								<details className="fill-secondary ">
									<summary className="hover:text-primary">
										<Link to={"/renta"}>Renta</Link>
									</summary>
									<ul className="p-2 bg-base-100">
										<li>
											<Link to={"renta/estudio"}>Estudio</Link>
										</li>
										<li>
											<Link to={"renta/foro"}>Foro</Link>
										</li>
										<li>
											<Link to={"renta/equipo"}>Equipo</Link>
										</li>
									</ul>
								</details>
							</li>

							<li>
								<Link to={"/servicios"}>servicios</Link>
							</li>

							<li>
								<Link to={"/portafolio"}>portafolio</Link>
							</li>
							<li>
								<Link to={"/ciclorama"}>Cicloramas</Link>
							</li>
						</ul>
					</div>

					<div className="flex-none hidden lg:block uppercase">
						<ul className="menu menu-horizontal">
							{/* Navbar menu content here */}
							<Link
								to={"/contacto"}
								className="btn btn-secondary btn-outline border-2 px-5"
							>
								contacto
							</Link>
						</ul>
					</div>
					<div className=" grid grid-flow-col gap-4 fill-secondary px-0 md:px-10 ">
						{/* youtube link */}
						<Link
							to="https://www.youtube.com/@centralestudio9189"
							target="blank"
							className="fill-secondary hover:fill-accent"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-secondary hover:fill-accent"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</Link>
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
						<a
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
						</a>

						{/* whatsapp */}
						<a
							to="http://wa.link/rnk8qu"
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
						</a>
					</div>
				</nav>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer-3" className="drawer-overlay"></label>
				<ul className="menu p-4 w-80 h-full bg-primary text-white uppercase  gap-4">
					<li className="items-center">
						<img
							src={centralLogo}
							alt="central logo"
							className="w-40 h-20 object-cover object-center p-0 "
							style={{ objectPosition: "0 -45px" }}
						/>
					</li>

					<li>
						<details className="fill-secondary ">
							<summary className="hover:text-primary">Renta</summary>
							<ul className="p-2 ">
								<li>
									<a>Estudio</a>
								</li>
								<li>
									<a>Foro</a>
								</li>
								<li>
									<a>Equipo</a>
								</li>
							</ul>
						</details>
					</li>
					<li>
						<Link to={"/servicios"}>servicios</Link>
					</li>

					<li>
						<Link to={"/portafolio"}>portafolio</Link>
					</li>
					<li>
						<Link to={"/ciclorama"}>Cicloramas</Link>
					</li>
					<span className="flex-1"></span>
					<div className=" grid grid-flow-col gap-4 fill-secondary px-0 md:px-10 ">
						{/* youtube link */}
						<Link
							to="https://www.youtube.com/@centralestudio9189"
							target="blank"
							className="fill-secondary hover:fill-accent"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								className="fill-secondary hover:fill-accent"
							>
								<path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
							</svg>
						</Link>
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
							to="http://wa.link/rnk8qu"
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
					<Link
						to={"/contacto"}
						className="btn btn-secondary btn-outline border-2"
					>
						contacto
					</Link>
				</ul>
			</div>
		</header>
	);
}
