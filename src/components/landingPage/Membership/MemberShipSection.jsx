import MembershipListItem from "../../common/MemebershipListItem/MemberShipListItem.jsx";
import { TbBoxModel, TbBasketDiscount } from "react-icons/tb";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { RiRemoteControlLine } from "react-icons/ri";
import { BiSquareRounded } from "react-icons/bi";
import { MdFilter } from "react-icons/md";
import { TiFlashOutline } from "react-icons/ti";
import { Link } from "react-router-dom";

const MemberShipSection = () => {
	return (
		<section className="max-w-6xl w-full mx-auto my-8 px-8 mt-auto flex flex-col gap-8 justify-center items-center ff-barlow pt-8">
			<h2 className="text-2xl md:text-4xl font-bold mb-4 text-center max-w-3xl mt-8">
				Adelántate a tus producciones con nuestras
				<span className="text-accent"> MEMBRESÍAS </span> de estudio y foro
			</h2>
			<figure className="flex flex-col md:flex-row gap-2 w-full justify-around items-center my-10">
				{/* Membresía PLUS */}
				<div className="bg-white shadow-lg stroke-white border-2 h-64 rounded border-primary mb-8 py-4 px-2 flex flex-col items-center transition-all transform hover:bg-primary  group hover:scale-105 duration-200 ease-in-out hover:border-opacity-100 hover:border-accent hover:">
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-primary group-hover:text-white group-hover:border-accent">
						PLUS
					</h3>
					<p className="text-4xl font-extrabold text-primary group-hover:text-white">
						<span className="text-xl ">$</span>4,600
					</p>
					<p className="font-semibold mb-2 px-2 group-hover:text-accent">
						20 horas de estudio
					</p>
					<p className="text-base-300 ">Precio regular $5,600 + cicloramas</p>
				</div>

				{/* Membresía ULTRA */}
				<div className="bg-white shadow-lg stroke-white border-2 h-64 rounded border-secondary mb-8 py-4 px-2 flex flex-col items-center transition-all transform hover:bg-secondary group scale-125 hover:scale-[1.35] duration-200 ease-in-out hover:border-opacity-100 hover:border-primary hover:">
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-secondary group-hover:text-white group-hover:border-primary">
						ULTRA
					</h3>
					<p className="text-4xl font-extrabold text-secondary group-hover:text-white">
						<span className="text-xl ">$</span>6,500
					</p>
					<p className="font-semibold mb-2 px-2 group-hover:text-primary">
						20 horas de foro
					</p>
					<p className="text-base-300 group-hover:text-primary/50">
						Precio regular $7,800 + cicloramas
					</p>
				</div>

				{/* Membresía PREMIUM */}
				<div className="bg-white shadow-lg stroke-white border-2 h-64 rounded border-accent mb-8 py-4 px-2 flex flex-col items-center transition-all transform hover:bg-accent  group hover:scale-105 duration-200 ease-in-out hover:border-opacity-100 hover:border-primary ">
					<h3 className="text-3xl font-bold mb-8 text-center w-36 border-b-2 border-accent group-hover:text-white group-hover:border-primary">
						PREMIUM
					</h3>
					<p className="text-4xl font-extrabold text-accent group-hover:text-white">
						<span className="text-xl ">$</span>9,900
					</p>
					<p className="font-semibold mb-2 px-2 group-hover:text-primary">
						20 horas de foro + estudio
					</p>
					<p className="text-base-300 group-hover:text-primary/50 ">
						Precio regular $13,400 + cicloramas
					</p>
				</div>
			</figure>
			{/* Included in the membership */}
			<div className="w-full text-center">
				<h4 className="text-3xl font-bold mb-4">Incluido en la membresía</h4>
			</div>

			<ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
				<MembershipListItem
					text="Todos los cicloramas de colores disponibles"
					icon={<HiOutlineColorSwatch className="w-8 h-8" />}
				/>
				<MembershipListItem
					text="2 Flashes de estudio Godox SK40011-V con reflectores"
					icon={<TiFlashOutline className="w-8 h-8" />}
				/>
				<MembershipListItem
					text="2 Softbox Godox SB-BW 60 x 90 cm"
					icon={<TbBoxModel className="w-8 h-8" />}
				/>
				<MembershipListItem
					text="1 transmisor Godox XT-16"
					icon={<RiRemoteControlLine className="w-10 h-10" />}
				/>
				<MembershipListItem
					text="1 rebotador plegable 5 en 1"
					icon={<BiSquareRounded className="w-8 h-8" />}
				/>
				<MembershipListItem
					text="10 filtros de tela de colores"
					icon={<MdFilter className="w-8 h-8" />}
				/>
				<MembershipListItem
					text="-15% en rentas de otros espacios, horas extras, equipo o rentas durante el fin de semana durante la vigencia de la membresía."
					className="col-span-1 md:col-span-2 lg:col-span-3 items-center justify-center"
					icon={<TbBasketDiscount className="w-8 h-8" />}
				/>
			</ul>

			{/* Call to Action */}
			<div className="w-full text-center mt-8">
				<p className="text-lg md:text-2xl  font-medium mb-4">
					Descubre los Beneficios de Nuestras Membresías. <br />
					<span className="text-accent font-bold">
						¡Aprovecha Ahora y Eleva tus Producciones!
					</span>
				</p>
				<Link to="/membresias" className="group">
					<button className="btn btn-outline btn-primary border-2 border-primary text-primary hover:text-white">
						¡Conoce Nuestras Membresías!
					</button>
				</Link>
			</div>
		</section>
	);
};

export default MemberShipSection;
