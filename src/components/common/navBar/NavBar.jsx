import SocialMedia from "../socialmedia/SocialMedia";
import logo from "../../../assets/nav/Logo_CE.png";
import "./NavBar.css";
import CartWidget from "../cartWidget/CartWidget";

export default function NavBar() {
	return (
		<header aria-label="Site Header" className=" dark:bg-gray-900">
			<div className="mx-auto max-w-screen-xl pe-4 sm:px-6 lg:px-8">
				<div className="flex h-28 items-center justify-between">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-teal-600 dark:text-teal-600" href="/">
							<span className="sr-only">Home</span>
							<img src={logo} alt="Central Studio Logo" className="w-28" />
						</a>
					</div>

					<div className="hidden md:block">
						<nav aria-label="Site Nav" className="ff-nunito uppercase">
							<ul className="flex items-center gap-6 text-sm">
								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
										href="/"
									>
										renta de estudio
									</a>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
										href="/"
									>
										servicios
									</a>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
										href="/"
									>
										portafolio
									</a>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
										href="/"
									>
										venta de cicloramas
									</a>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
										href="/"
									>
										<button className="ff-nunito uppercase bg-sky-700 px-6 py-2 rounded">
											Contact
										</button>
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="hidden md:block">
							<SocialMedia />
						</div>

						<div className="block md:hidden">
							<button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>

			<CartWidget />
		</header>
	);
}
