import Image from "next/image";

import contactUsIllustration from "@public/images/contact-us-illustration.png";

export function ContactUs() {
	return (
		<section className="mt-[1100px] md:mt-[70%] lg:mt-[40%] xl:mt-40 mx-10 md:mx-28 mb-20 flex flex-col md:flex-row gap-16">
			<div className="flex flex-col justify gap-16">
				<h2 className="font-semibold text-3xl">
					<span className="text-light-blue">Lorem Ipsum</span> is simply dummy text of the
					printing.
				</h2>
				<div>
					<p>
						KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
						applications and website builders measuring dozens of completed projects. We
						build and develop mobile applications for several top platforms, including
						Android & IOS.
					</p>
					<br />
					<p>
						KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
						applications and website builders measuring dozens
					</p>
				</div>
				<button className="w-fit border-2 border-light-blue rounded-lg py-2.5 px-12 text-light-blue">
					Contact Us
				</button>
			</div>
			<Image
				src={contactUsIllustration}
				width={642}
				height={471}
				alt="Contact Us Illustration"
			/>
		</section>
	);
}
