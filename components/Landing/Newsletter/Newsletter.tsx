import Image from "next/image";

import newsletterStar from "@public/images/newsletter-star.png";
import newsletterIcon from "@public/images/newsletter-icon.png";

export function Newsletter() {
	return (
		<section className="relative bg-light-blue-secondary py-40 px-12 lg:px-96 flex flex-col gap-20">
			<h2 className="text-3xl font-semibold text-center self-center w-3/4">
				Lorem Ipsum is simply dummy text of the printing.{" "}
			</h2>
			<form className="flex flex-row gap-3.5">
				<input
					type="email"
					placeholder="Enter your email"
					className="w-full py-5 px-10 rounded-lg placeholder:text-light-gray-four"
				/>
				<button
					type="submit"
					className="py-5 px-10 bg-black text-white font-medium uppercase rounded-lg"
				>
					Subscribe
				</button>
			</form>
			<Image
				src={newsletterIcon}
				width={54}
				height={54}
				alt="Newsletter Icon"
				className="absolute bottom-3/4 right-1/4"
			/>
			<Image
				src={newsletterStar}
				width={66}
				height={66}
				alt="Newsletter Star"
				className="absolute -top-8 left-36"
			/>
		</section>
	);
}
