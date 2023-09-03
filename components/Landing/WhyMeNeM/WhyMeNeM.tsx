import Image from "next/image";

import whyMenemShape from "@public/images/why-menem-shape.svg";
import whyMenemTriangles from "@public/images/why-menem-triangles.svg";
import windowsIcon from "@public/icons/windows.svg";
import searchIcon from "@public/icons/search.svg";
import growthIcon from "@public/icons/growth.svg";

export function WhyMeNeM() {
	return (
		<section className="flex flex-col gap-20 mb-44">
			<div className="relative text-center flex flex-col gap-8 mx-10 md:w-1/2 self-center">
				<h3 className="text-3xl font-semibold">
					Lorem Ipsum is simply dummy text of the printing.
				</h3>
				<p className="text-lg text-light-gray">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry's
				</p>
				<Image
					src={whyMenemTriangles}
					width={107}
					height={87}
					alt="Why MaNeM Triangles"
					className="absolute top-0 -left-1/3"
				></Image>
			</div>
			<div className="relative flex flex-col gap-20">
				<h2 className="text-4xl font-medium self-center">Why MeNeM ?</h2>
				<div className="relative grid grid-cols-1 lg:grid-cols-3 self-center gap-y-20 gap-x-14 w-1/2">
					<div className="flex flex-col gap-6">
						<Image
							src={windowsIcon}
							width={100}
							height={100}
							alt="Windows Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							AI will generate your content such as Text, Images, Memes
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<Image
							src={searchIcon}
							width={100}
							height={100}
							alt="Search Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							You can search what you need to do
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<Image
							src={growthIcon}
							width={100}
							height={100}
							alt="Growth Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							Compare a certificate and choose the best one
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<Image
							src={windowsIcon}
							width={100}
							height={100}
							alt="Windows Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							Join with battle and get existing opportunities
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<Image
							src={searchIcon}
							width={100}
							height={100}
							alt="Search Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							Promoting Edutainment based Education
						</p>
					</div>
					<div className="flex flex-col gap-6">
						<Image
							src={growthIcon}
							width={100}
							height={100}
							alt="Growth Icon"
							className="self-center"
						></Image>
						<p className="text-center text-dark-blue">
							Grow your network in Educational and Professional
						</p>
					</div>
					<Image
						src={whyMenemTriangles}
						width={107}
						height={87}
						alt="Why MaNeM Triangles"
						className="absolute top-1/2 -right-1/3"
					></Image>
				</div>
			</div>
			<Image
				src={whyMenemShape}
				width={53}
				height={274}
				alt="Why MaNeM Shape"
				className="absolute"
			></Image>
		</section>
	);
}
