import Image from "next/image";

import collaborateEarth from "@public/images/collaborate-earth.svg";
import collaborateIcon from "@public/icons/collaborate.svg";

export function Collaborate() {
	return (
		<section className="w-full h-[90%] px-10 lg:px-32 py-16 flex flex-row justify-between place-content-center text-center lg:text-left">
			<div className="self-center flex flex-col gap-4 font-semibold w-full lg:w-1/3">
				<Image
					src={collaborateIcon}
					width={77}
					height={77}
					alt="Collaborate Icon"
					className="self-center lg:self-start"
				/>
				<h1 className="text-5xl">Let&apos;s Collaborate</h1>
				<p className="text-gray-text-secondary text-xl">
					Lorem Ipsum is simply dummy text of the printing .
				</p>
			</div>
			<Image
				src={collaborateEarth}
				width={608}
				height={391}
				alt="Collaborate Earth"
				className="self-center hidden lg:block"
			/>
		</section>
	);
}
