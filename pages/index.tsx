import Head from "next/head";

import Navbar from "@Landing/Navbar";
import Hero from "@Landing/Hero";
import WhyMeNeM from "@Landing/WhyMeNeM";
import Features from "@Landing/Features";
import JoinNow from "@Landing/JoinNow";
import Newsletter from "@Landing/Newsletter";
import Footer from "@Landing/Footer";

export default function Home() {
	return (
		<>
			<Head>
				<title>MeNeM - First GPT Based Social Networking Platform</title>
				<meta
					name="description"
					content="Join with MeNeM On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment,"
				/>
			</Head>
			<main className="h-screen">
				<Navbar />
				<Hero />
			</main>
			<WhyMeNeM />
			<Features />
			<JoinNow />
			<Newsletter />
			<Footer />
		</>
	);
}
