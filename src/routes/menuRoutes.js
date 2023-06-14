import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Renta from "../pages/Renta";
import Foro from "../pages/renta/Foro";
import Estudio from "../pages/renta/Estudio";
import Equipo from "../pages/renta/Equipo";
import Services from "../pages/Services";
import Portafolio from "../pages/Portafolio";
import Cicloramas from "../pages/Cicloramas";
import Contacto from "../pages/Contacto";
import ProductDetailContainter from "../pages/productDetail/ProductDetailContainter";

export const menuRoutes = [
	{
		id: 1,
		path: "/",
		Element: LandingPage,
	},
	{
		id: 2,
		path: "*",
		Element: NotFound,
	},

	{
		id: 3,
		path: "/renta",
		Element: Renta,
	},
	{
		id: 4,
		path: "/renta/foro",
		Element: Foro,
	},
	{
		id: 5,
		path: "/renta/estudio",
		Element: Estudio,
	},
	{
		id: 6,
		path: "/renta/equipo",
		Element: Equipo,
	},
	{
		id: 7,
		path: "/servicios",
		Element: Services,
	},
	{
		id: 8,
		path: "/portafolio",
		Element: Portafolio,
	},
	{
		id: 9,
		path: "/ciclorama",
		Element: Cicloramas,
	},
	{
		id: 10,
		path: "/contacto",
		Element: Contacto,
	},
	{
		id: 11,
		path: "/itemdetail/:id",
		Element: ProductDetailContainter,
	},
];
