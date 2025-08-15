import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
	const images = [
		"alun-alun-kejaksan.jpg",
		"masjid-agung-sang-cipta-rasa.jpg",
		"sunyaragi-1.jpg",
	];

	const place = [
		"Alun-Alun Kejaksan",
		"Masjid Agung Sang Cipta Rasa",
		"Sunyaragi",
	];

	const routes = ["/alun-alun-kejaksan", "/masjid-agung", "/sunyaragi"];

	const [currentIndex, setCurrentIndex] = useState(0);
	const [fade, setFade] = useState(true);
	const navigate = useNavigate();

	const goToHome = () => {
		navigate("/", { replace: false });
		setTimeout(() => {
			document.getElementById("Home")?.scrollIntoView({ behavior: "smooth" });
		}, 100); // delay kecil untuk pastikan halaman sudah dirender
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setFade(false);
			setTimeout(() => {
				setCurrentIndex((prev) => (prev + 1) % images.length);
				setFade(true);
			}, 500);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const handleNavigate = () => {
		navigate(routes[currentIndex]);
	};

	return (
		<div
			className="hero min-h-screen relative overflow-hidden"
			id="Home"
		>
			<div
				className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
					fade ? "opacity-100" : "opacity-0"
				}`}
				style={{
					backgroundImage: `url(${images[currentIndex]})`,
				}}
			></div>

			<div className="hero-overlay bg-black/50 absolute inset-0"></div>

			<div className="hero-content text-neutral-content text-center relative z-10">
				<div className="max-w-md">
					<h1
						className={`mb-5 text-5xl font-bold transition-opacity duration-1000 ${
							fade ? "opacity-100" : "opacity-0"
						}`}
					>
						{place[currentIndex]}
					</h1>

					<button
						onClick={handleNavigate}
						className="btn btn-primary"
					>
						Let's Journey
					</button>
				</div>
			</div>
		</div>
	);
}
