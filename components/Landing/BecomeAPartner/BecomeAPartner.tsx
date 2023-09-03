import Image from "next/image";
import Link from "next/link";

import LandingForm from "@Landing/LandingForm";
import LandingInput from "@Landing/LandingInput";

import partnerShapeBox from "@public/images/partner-shape-box.svg";
import partnerShapeCircle from "@public/images/partner-shape-circle.svg";
import partnerShapeCircle2 from "@public/images/partner-shape-circle-2.svg";

export function BecomeAPartner() {
	return (
		<section className="relative">
			<div className="bg-very-light-gray flex flex-col md:flex-row gap-10 px-10 lg:px-28 py-32 justify-between">
				<div className="flex flex-col gap-6 w-full md:w-1/3">
					<h2 className="font-bold text-5xl text-dark-blue-secondary">
						Become a Partner
					</h2>
					<p className="text-gray-text">
						Used and supported in over 178 countries around the globe.
						<br />
						We'll work with you to open more doors and close more sales across all
						verticals.
					</p>
				</div>
				<div className="relative z-10 w-full md:w-1/2">
					<LandingForm className="relative" submitButtonLabel="Apply">
						<LandingInput
							id="organization"
							label="Enter organization / institute name"
							placeholder="Ex: NIT Trichy , IIT Madras"
						/>
						<LandingInput
							id="email"
							label="Email Address"
							type="email"
							placeholder="enter email address"
						/>
						<div className="flex flex-col xl:flex-row gap-5">
							<LandingInput
								id="menem_id"
								label="MeNeM ID"
								placeholder="Enter your user id"
								containerClassName="w-full"
							/>
							<LandingInput
								id="phone"
								label="Phone"
								placeholder="Phone number"
								containerClassName="w-full"
							/>
						</div>
						<LandingInput
							id="country"
							label="Your Country"
							placeholder="enter your country"
						/>
					</LandingForm>
					<Image
						src={partnerShapeBox}
						width={148}
						height={100}
						alt="Partner Shape Box"
						className="absolute -top-[25px] -left-[37px] z-10 hidden md:block"
					/>
					<Image
						src={partnerShapeCircle}
						width={186}
						height={186}
						alt="Partner Shape Circle"
						className="absolute -top-[46.5px] -right-[46.5px] hidden md:block"
					/>
					<Image
						src={partnerShapeCircle2}
						width={161.22}
						height={161.22}
						alt="Partner Shape Circle"
						className="absolute -bottom-[53.74px] -left-[53.74px] hidden md:block"
					/>
				</div>
			</div>
			<div className="bg-dark-purple-secondary absolute bottom-0 w-full h-1/3 z-0"></div>
		</section>
	);
}
