import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import COLORS from "../../constants/colors";

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [showSearch, setShowSearch] = useState(false);
	const [isFading, setIsFading] = useState(false);
	const [searchTerm, setSearchTerm] = useState(""); // ✅ state untuk input
	const [errorMessage, setErrorMessage] = useState(""); // ✅ state pesan error
	const navigate = useNavigate();

	// Mapping destinasi → route
	const destinations = {
		"Masjid Agung": "masjid-agung",
		"Masjid Agung Sang Cipta Rasa": "masjid-agung",
		"Goa Sunyaragi": "sunyaragi",
		"Gua Sunyaragi": "sunyaragi",
		"Alun-Alun Kejaksan": "alun-alun-kejaksan",
		"Alun-Alun": "alun-alun-kejaksan",
		Sunyaragi: "sunyaragi",
	};

	const toggleMenu = () => setIsOpen(!isOpen);

	const openSearch = () => {
		setShowSearch(true);
		setTimeout(() => setIsFading(true), 10);
	};
	const closeSearch = () => {
		setIsFading(false);
		setTimeout(() => setShowSearch(false), 300);
		setErrorMessage("");
		setSearchTerm("");
	};

	// ✅ Fungsi handle search
	const handleSearch = () => {
		const term = searchTerm.trim().toLowerCase(); // Buat input lowercase dan hilangin spasi berlebih

		// Cari destinasi yang match tanpa peduli huruf besar/kecil
		const found = Object.keys(destinations).find(
			(key) => key.toLowerCase() === term,
		);

		if (found) {
			navigate(destinations[found]);
			closeSearch();
			setErrorMessage("");
		} else {
			setErrorMessage("Destinasi tidak ada");
		}
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > lastScrollY && window.scrollY > 50) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}
			setLastScrollY(window.scrollY);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<>
			{/* ✅ SEARCH OVERLAY */}
			{showSearch && (
				<div
					className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 p-4 transition-opacity duration-300 ${
						isFading ? "opacity-100" : "opacity-0"
					}`}
				>
					<div className="text-xl font-semibold mb-4 text-center">
						Find Destination, Article, or any other Information about Cirebon
					</div>

					<div className="w-full max-w-xl flex border border-blue-900 rounded">
						<div className="flex items-center px-3 text-blue-900">
							<FaSearch size={18} />
						</div>
						<input
							type="text"
							placeholder="Find your destination"
							className="flex-1 px-3 py-2 outline-none"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown={(e) => e.key === "Enter" && handleSearch()} // Enter langsung cari
						/>
						<button
							className="bg-blue-900 text-white px-5 font-bold"
							onClick={handleSearch}
						>
							SEARCH
						</button>
					</div>

					{/* Pesan Error */}
					{errorMessage && (
						<div className="text-red-600 mt-3">{errorMessage}</div>
					)}

					<button
						onClick={closeSearch}
						className="absolute top-5 right-10 text-xl"
					>
						<FaTimes />
					</button>
				</div>
			)}

			{/* ✅ NAVBAR */}
			<nav
				style={{ backgroundColor: COLORS.blueDark, color: "white" }}
				className={`fixed top-0 left-0 w-full shadow-md z-40 transition-transform duration-300 ${
					showNavbar ? "translate-y-0" : "-translate-y-full"
				}`}
			>
				<div className="max-w-7xl mx-auto flex justify-between items-center p-4">
					<div className="text-xl font-bold ml-5">Tribasa</div>

					<ul className="hidden md:flex gap-6 items-center mr-5">
						<li>
							<a onClick={() => navigate("/")}>Home</a>
						</li>
						<li>
							<a onClick={() => navigate("/Explore")}>Explore</a>
						</li>
						<li>
							<a href="https://portofolio-mike-responsive.vercel.app/">
								About Me
							</a>
						</li>
						<li>
							<button
								onClick={openSearch}
								className="hover:underline flex items-center gap-1"
							>
								<FaSearch />
							</button>
						</li>
					</ul>

					<div className="flex items-center gap-4 md:hidden mr-5">
						<button
							onClick={openSearch}
							className="hover:underline"
						>
							<FaSearch size={20} />
						</button>
						<button onClick={toggleMenu}>
							{isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
						</button>
					</div>
				</div>

				{isOpen && (
					<ul
						className="md:hidden flex flex-col items-center w-full px-4 pb-4 shadow"
						style={{ backgroundColor: COLORS.blueDark, color: "white" }}
					>
						<li className="w-full text-center py-2 border-b">
							<button
								onClick={() => navigate("/")}
								className="block w-full"
							>
								Home
							</button>
						</li>
						<li className="w-full text-center py-2 border-b">
							<a
								href="#Explore"
								className="block"
							>
								Explore
							</a>
						</li>
						<li className="w-full text-center py-2 border-b">
							<a
								href="#About"
								className="block"
							>
								About Me
							</a>
						</li>
					</ul>
				)}
			</nav>
		</>
	);
}
