import Head from "next/head";

import Navbar from "@Landing/Navbar";
import Services from "@Landing/Services";
import ContactUs from "@Landing/ContactUs";
import BecomeAPartner from "@Landing/BecomeAPartner";
import Newsletter from "@Landing/Newsletter";
import Footer from "@Landing/Footer";

export default function WhatWeDo() {
	return (
		<>
			<Head>
				<title>What We Do - MeNeM</title>
				<meta
					name="description"
					content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s"
				/>
			</Head>
			<main className="h-screen">
				<Navbar />
				<Services />
			</main>
			<ContactUs />
			<BecomeAPartner />
			<Newsletter />
			<Footer />
		</>
	);
}
