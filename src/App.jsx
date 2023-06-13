import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Layout from "./components/common/Layout/Layout";
import NotFound from "./pages/NotFound";
import Renta from "./pages/Renta";
import Foro from "./pages/renta/Foro";
import Estudio from "./pages/renta/Estudio";
import Equipo from "./pages/renta/Equipo";
import Services from "./pages/Services";
import Portafolio from "./pages/Portafolio";
import Cicloramas from "./pages/Cicloramas";
import Contacto from "./pages/Contacto";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<LandingPage />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/renta" element={<Renta />} />
					<Route path="/renta/foro" element={<Foro />} />
					<Route path="/renta/estudio" element={<Estudio />} />
					<Route path="/renta/equipo" element={<Equipo />} />
					<Route path="/servicios" element={<Services />} />
					<Route path="/portafolio" element={<Portafolio />} />
					<Route path="/ciclorama" element={<Cicloramas />} />
					<Route path="/contacto" element={<Contacto />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
