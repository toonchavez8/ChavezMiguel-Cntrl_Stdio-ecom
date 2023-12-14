import whatsapp from "../../../assets/nav/Whatsapp_Logo.png";
import facebook from "../../../assets/nav/Facebook_Logo.png";
import instagram from "../../../assets/nav/Instagram_Logo.png";
import FAQ from "../../../assets/nav/FAQ_Logo.png";
import { Link } from "react-router-dom";

export default function SocialMedia() {
	return (
		<div className="flex flex-row gap-4 justify-center items-center">
			<Link to="https://www.facebook.com/centralestudio/" target="_blank">
				<img src={facebook} alt="Facebook" className="" />
			</Link>
			<Link to="https://www.instagram.com/centralestudio/" target="_blank">
				<img src={instagram} alt="instagram logo" className="" />
			</Link>
			<Link to="" target="_blank">
				<img src={FAQ} alt="FAQ" className="" />
			</Link>
			<Link
				href="https://api.whatsapp.com/send?phone=5213331719418&text=%C2%A1Hola!%20Me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios%20de..."
				target="_blank"
			>
				<img src={whatsapp} alt="Whatsapp" className="" />
			</Link>
		</div>
	);
}
