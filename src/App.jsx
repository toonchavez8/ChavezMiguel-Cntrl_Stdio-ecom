import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";

import { menuRoutes } from "./routes/menuRoutes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					{menuRoutes.map(({ id, path, Element }) => (
						<Route key={id} path={path} element={<Element />} />
					))}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
