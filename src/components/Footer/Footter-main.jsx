import {
	FaFacebookF,
	FaTwitter,
	FaInstagram,
	FaYoutube,
	FaTiktok,
} from "react-icons/fa";

import COLORS from "../../constants/colors";

export default function Footer() {
	return (
		<footer
			style={{ backgroundColor: COLORS.blueDark }}
			className="text-white px-6 py-10"
		>
			<div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 items-start">
				{/* LOGO */}
				<div className="flex flex-col gap-4">
					<img
						src="/logo-kemenparekraf.png" // Ganti dengan path logo kamu
						alt="Ministry of Tourism"
						className="h-12"
					/>
					<img
						src="/logo-wonderful.png" // Ganti dengan path logo kamu
						alt="Wonderful Indonesia"
						className="h-12"
					/>
				</div>

				{/* Our Websites */}
				<div>
					<h3 className="font-semibold mb-3">Our Websites</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Digital Asset
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Yacht
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Cruise
							</a>
						</li>
					</ul>
				</div>

				{/* Informations */}
				<div>
					<h3 className="font-semibold mb-3">Informations</h3>
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								About Us
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Privacy Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Terms & Conditions
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Cookie Policy
							</a>
						</li>
						<li>
							<a
								href="#"
								className="hover:underline"
							>
								Contact Us
							</a>
						</li>
					</ul>
				</div>

				{/* Social Media */}
				<div>
					<h3 className="font-semibold mb-3">Social Media</h3>
					<ul className="space-y-3">
						<li className="flex items-center gap-3">
							<FaFacebookF /> Facebook
						</li>
						<li className="flex items-center gap-3">
							<FaTwitter /> Twitter
						</li>
						<li className="flex items-center gap-3">
							<FaInstagram /> Instagram
						</li>
						<li className="flex items-center gap-3">
							<FaYoutube /> Youtube
						</li>
						<li className="flex items-center gap-3">
							<FaTiktok /> Tiktok
						</li>
					</ul>
				</div>
			</div>

			<hr className="my-8 border-white" />

			<p className="text-center text-sm text-white">
				Copyright ©2025 Michael Ivory - Tribasa Project
			</p>
		</footer>
	);
}
