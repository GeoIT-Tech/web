import Head from "next/head";

import Navbar from "@Landing/Navbar";
import Collaborate from "@Landing/Collaborate";
import DonateUs from "@Landing/DonateUs";
import Footer from "@Landing/Footer";

export default function Donation() {
	return (
		<>
			<Head>
				<title>Donation - MeNeM</title>
				<meta
					name="description"
					content="Lorem Ipsum is simply dummy text of the printing."
				/>
			</Head>
			<main className="h-screen">
				<Navbar />
				<Collaborate />
			</main>
			<DonateUs />
			<Footer />
		</>
	);
}
