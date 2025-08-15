import Hero from "./components/Body/Hero";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AlunAlun from "./components/pages/AlunAlun";
import MasjidAgung from "./components/pages/MasjidAgung";
import Sunyaragi from "./components/pages/GoaSunyaragi";
import Navbar from "./components/Navbar/Navbar-main";
import Footer from "./components/Footer/Footter-main";
import Explore from "./components/Explore/explore";

function App() {
	return (
		<Router>
			{" "}
			{/* Router dibungkus di sini */}
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Hero />}
				/>
				<Route
					path="/alun-alun-kejaksan"
					element={<AlunAlun />}
				/>
				<Route
					path="/masjid-agung"
					element={<MasjidAgung />}
				/>
				<Route
					path="/sunyaragi"
					element={<Sunyaragi />}
				/>
				<Route
					path="/explore"
					element={<Explore />}
				/>
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
