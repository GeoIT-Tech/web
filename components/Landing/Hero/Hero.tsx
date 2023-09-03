import Image from "next/image";
import Link from "next/link";

import playStoreIcon from "@public/icons/play-store.svg";
import appStoreIcon from "@public/icons/app-store.svg";
import heroImage from "@public/images/hero-image.svg";
import heroBgShape from "@public/images/hero-bg-shape.svg";

export function Hero() {
	return (
		<section className="h-[90%] w-full flex flex-col justify-center relative">
			<div className="mx-10 lg:w-1/2 place-self-center text-center">
				<h1 className="text-5xl leading-[4rem] text-light-blue font-bold mb-2">
					First GPT Based Social Networking Platform
				</h1>
				<p className="leading-8 mb-8">
					Join with MeNeM On the other hand, we denounce with righteous indignation and
					dislike men who are so beguiled and demoralized by the charms of pleasure of the
					moment,
				</p>
				<div className="flex flex-row gap-8 w-full place-content-center">
					<Link className="flex align-middle" href="#">
						<Image src={playStoreIcon} width={24} height={30} alt="Play Store Icon" />
					</Link>
					<button className="text-light-blue font-bold w-36 h-12 border-2 border-black rounded-xl">
						Join Today !
					</button>
					<Link className="flex align-middle" href="#">
						<Image src={appStoreIcon} width={30} height={30} alt="App Store Icon" />
					</Link>
				</div>
			</div>
			<Image
				src={heroImage}
				width={321}
				height={471}
				alt="MeNeM Hero Image"
				className="absolute left-4 hidden lg:block"
			/>
			<Image
				src={heroBgShape}
				width={52}
				height={184}
				alt="MeNeM Hero Shape"
				className="absolute right-0 top-0 hidden lg:block"
			/>
		</section>
	);
}
