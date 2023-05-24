import SocialMedia from "../socialmedia/SocialMedia";
import logo from "../../../assets/nav/Logo_CE.png";
import "./NavBar.css";

export default function NavBar() {
	return (
		<header className="flex flexrow gap-2 justify-between  px-10">
			<a href="" target="">
				<img src={logo} alt="Logo" className="w-28  ms-10" />
			</a>
			<nav className="navbar-links uppercase py-8 flex gap-10  justify-center items-center">
				<ul className="flex flexrow gap-3 ">
					<a href="" target="">
						<li>Renta de estudio</li>
					</a>
					<a href="" target="">
						<li>Servicios</li>
					</a>
					<a href="" target="">
						<li>portafolio</li>
					</a>
					<a href="" target="">
						<li>venta de cicloramas</li>
					</a>
				</ul>
				<a href="">
					<button className="uppercase bg-blue-700 text-white px-6 py-2 rounded">
						contacto
					</button>
				</a>
			</nav>
			<SocialMedia />
		</header>
	);
}
