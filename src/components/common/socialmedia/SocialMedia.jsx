import whatsapp from "../../../assets/nav/Whatsapp_Logo.png";
import facebook from "../../../assets/nav/Facebook_Logo.png";
import instagram from "../../../assets/nav/Instagram_Logo.png";
import FAQ from "../../../assets/nav/FAQ_Logo.png";
import { Link } from "react-router-dom";

export default function SocialMedia() {
	return (
		<div className="flex flex-row items-center justify-center gap-4">
			<Link to="https://www.facebook.com/centralestudio/" target="_blank">
				<img src={facebook} alt="Facebook" className="" />
			</Link>
			<Link to="https://www.instagram.com/centralestudio/" target="_blank">
				<img src={instagram} alt="instagram logo" className="" />
			</Link>
			<Link to="" target="_blank">
				<img src={FAQ} alt="FAQ" className="" />
			</Link>
			<Link href="https://wa.link/ygwmm6" target="_blank">
				<img src={whatsapp} alt="Whatsapp" className="" />
			</Link>
		</div>
	);
}
