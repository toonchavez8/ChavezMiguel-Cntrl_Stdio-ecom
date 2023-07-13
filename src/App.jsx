import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout/Layout";

import { menuRoutes } from "./routes/menuRoutes";
import CartContextProvider from "./context/cartContext";

function App() {
	return (
		<BrowserRouter>
			<CartContextProvider>
				<Routes>
					<Route element={<Layout />}>
						{menuRoutes.map(({ id, path, Element }) => (
							<Route key={id} path={path} element={<Element />} />
						))}
					</Route>
				</Routes>
			</CartContextProvider>
		</BrowserRouter>
	);
}

export default App;
