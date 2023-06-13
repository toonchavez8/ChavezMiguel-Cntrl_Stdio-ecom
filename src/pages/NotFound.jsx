import { Link } from "react-router-dom";

export default function NotFound() {
	return (
		<div className="hero h-176 bg-base-300">
			<div className="hero-content text-center">
				<div className="max-w-md">
					<h1 className="text-5xl font-bold">404 not found</h1>
					<p className="py-6">Lo sentimos, la página que buscas no existe.</p>
					<Link to="/">
						<button className="btn btn-primary">Inicio</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
