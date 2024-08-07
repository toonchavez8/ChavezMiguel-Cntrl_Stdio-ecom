import LandingPage from "../pages/LandingPage";
import NotFound from "../pages/NotFound";
import Renta from "../pages/Renta";
import Foro from "../pages/renta/Foro";
import Estudio from "../pages/renta/Estudio";
import Equipo from "../pages/renta/Equipo";
import Services from "../pages/Services";
import Cicloramas from "../pages/Cicloramas";
import ProductDetailContainter from "../pages/productDetail/ProductDetailContainter";
import ProductListContainer from "../components/common/ProductList/ProductListContainer";
import PoliticaDeRenta from "../pages/termsAndconditions/PoliticaDeRenta.jsx";
import CondicionesDeUso from "../pages/termsAndconditions/CondicionesDeUso.jsx";
import Cocina from "../pages/renta/Cocina.jsx";

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
		id: 9,
		path: "/ciclorama",
		Element: Cicloramas,
	},
	{
		id: 11,
		path: "/itemdetail/:id",
		Element: ProductDetailContainter,
	},
	{
		id: 12,
		path: "/itemdetail/category/:category",
		Element: ProductListContainer,
	},
	{
		id: 15,
		path: "/politica-de-renta",
		Element: PoliticaDeRenta,
	},
	{
		id: 16,
		path: "/condiciones-de-uso",
		Element: CondicionesDeUso,
	},
	{
		id: 17,
		path: "/renta/cocina",
		Element: Cocina,
	},
];
