import whatsapp from "../../../assets/nav/Whatsapp_Logo.png";
import facebook from "../../../assets/nav/Facebook_Logo.png";
import instagram from "../../../assets/nav/Instagram_Logo.png";
import FAQ from "../../../assets/nav/FAQ_Logo.png";

export default function SocialMedia() {
	return (
		<div className="flex flex-row gap-4 justify-center items-center">
			<a href="" target="">
				<img src={facebook} alt="Facebook" className="" />
			</a>
			<a href="" target="">
				<img src={instagram} alt="instagram logo" className="" />
			</a>
			<a href="" target="">
				<img src={FAQ} alt="FAQ" className="" />
			</a>
			<a href="" target="">
				<img src={whatsapp} alt="Whatsapp" className="" />
			</a>
		</div>
	);
}
