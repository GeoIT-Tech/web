import Image from "next/image";

import servicesIcon from "@public/icons/services.svg";
import mobileApplicationsIcon from "@public/icons/mobile-applications.svg";
import webApplicationIcon from "@public/icons/web-application.svg";
import seoIcon from "@public/icons/seo.svg";
import arVrSolutions from "@public/icons/ar-vr-solutions.svg";

export function Services() {
	return (
		<section className="bg-light-blue-secondary h-[90%] w-full flex flex-col">
			<div className="mt-10 mb-10 mx-10 md:w-1/3 self-center text-center flex flex-col gap-6">
				<Image
					src={servicesIcon}
					width={135}
					height={135}
					alt="Services Icon"
					className="self-center"
				/>
				<h2 className="text-4xl font-semibold">
					Our <span className="text-light-blue">Services</span>
				</h2>
				<p className="text-gray-light text-lg">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
					Ipsum has been the industry&apos;s
				</p>
			</div>
			<div className="relative bg-white mx-10 lg:mx-28 p-20 grid grid-cols-1 md:grid-cols-2 gap-16 drop-shadow-2xl rounded-xl">
				<div className="flex flex-col md:flex-row justify-start items-center text-center md:text-left align-middle gap-5 md:gap-11">
					<Image
						src={mobileApplicationsIcon}
						width={91}
						height={90}
						alt="Mobile Applications Icon"
					/>
					<div className="flex flex-col justify-center gap-2">
						<h3 className="font-medium text-2xl">Mobile Applications</h3>
						<p className="text-gray-light-secondary">
							The simplest but robust technology to accompany with you
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-start items-center text-center md:text-left align-middle gap-5 md:gap-11">
					<Image
						src={webApplicationIcon}
						width={91}
						height={90}
						alt="Web Application Icon"
					/>
					<div className="flex flex-col justify-center gap-2">
						<h3 className="font-medium text-2xl">Web Application</h3>
						<p className="text-gray-light-secondary">
							Platform independant business solutions for maximum availability
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-start items-center text-center md:text-left align-middle gap-5 md:gap-11">
					<Image src={seoIcon} width={91} height={90} alt="Web Application Icon" />
					<div className="flex flex-col justify-center gap-2">
						<h3 className="font-medium text-2xl">SEO</h3>
						<p className="text-gray-light-secondary">
							Let the world find you on top of others
						</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-start items-center text-center md:text-left align-middle gap-5 md:gap-11">
					<Image
						src={arVrSolutions}
						width={91}
						height={90}
						alt="Mobile Applications Icon"
					/>
					<div className="flex flex-col justify-center gap-2">
						<h3 className="font-medium text-2xl">AR&VR Solutions</h3>
						<p className="text-gray-light-secondary">
							Advanced autonomous technologies to make life simple
						</p>
					</div>
				</div>
				<div className="absolute bg-gray-tertiary opacity-70 top-1/2 left-[12.5%] w-[75%] h-[0.5px] hidden md:block"></div>
				<div className="absolute bg-gray-tertiary opacity-70 top-[20%] left-1/2 w-[0.5px] h-[60%] hidden md:block"></div>
			</div>
		</section>
	);
}
