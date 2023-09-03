import Image from "next/image";

import profileIcon from "@public/icons/profile.svg";
import sendIcon from "@public/icons/send.svg";
import arrowRightIcon from "@public/icons/arrow-right.svg";

export function JoinNow() {
	return (
		<section className="flex flex-col gap-32 mb-20 px-10 md:px-20">
			<div className="flex md:flex-row flex-col justify-between gap-10">
				<div className="flex flex-col gap-10 md:w-3/5">
					<h2 className="text-4xl font-bold text-purple">
						Let your business thrive under our supervision
					</h2>
					<div className="text-dark-purple">
						<p>
							Launch a business today with our help and get it done with amazing
							launch features, websites and more with uifry. We help business like
							yours thrive every day and beyond.
						</p>
						<br />
						<p className="font-bold">We are making every business grow!</p>
					</div>
				</div>
				<div className="md:w-3/5">
					<form className="flex flex-col gap-4">
						<div className="relative">
							<Image
								src={profileIcon}
								width={18}
								height={18}
								alt="Profile Icon"
								className="absolute top-[1.3rem] left-4"
							/>
							<input
								type="text"
								placeholder="Full Name"
								className="w-full border-2 border-light-gray-tertiary p-4 pl-12 placeholder:text-dark-purple"
							/>
						</div>
						<div className="relative">
							<Image
								src={sendIcon}
								width={18}
								height={18}
								alt="Send Icon"
								className="absolute top-[1.3rem] left-4"
							/>
							<input
								type="email"
								placeholder="Email Address"
								className="w-full border-2 border-light-gray-tertiary p-4 pl-12 placeholder:text-dark-purple"
							/>
						</div>
						<button
							type="submit"
							className="bg-light-yellow flex flex-row place-content-center text-sm font-bold text-dark-purple gap-2 p-5"
						>
							Join Now{" "}
							<Image
								src={arrowRightIcon}
								width={18}
								height={18}
								alt="Right Arrow"
								className="mt-0.5"
							/>
						</button>
					</form>
				</div>
			</div>
			<div className="flex lg:flex-row flex-col gap-12 justify-between text-center">
				<div className="flex flex-col gap-9 py-16 xl:px-32 px-16 bg-gray-secondary rounded-lg">
					<h3 className="text-dark-gray font-semibold text-2xl">
						Lorem Ipsum is simply dummy text.
					</h3>
					<p className="text-light-gray-secondary mb-8">
						KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
						applications and website builders measuring dozens of completed projects. We
						build and develop mobile applications for several top platforms, including
						Android & IOS.
					</p>
					<div>
						<button className="bg-light-blue py-3 px-9 font-medium text-white rounded-md">
							View More
						</button>
					</div>
				</div>
				<div className="flex flex-col gap-9 py-16 xl:px-32 px-16 bg-light-blue text-white rounded-lg">
					<h3 className="font-semibold text-2xl">Lorem Ipsum is simply dummy text.</h3>
					<p className="mb-8">
						KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
						applications and website builders measuring dozens of completed projects. We
						build and develop mobile applications for several top platforms, including
						Android & IOS.
					</p>
					<div>
						<button className="bg-white py-3 px-9 font-medium text-light-blue rounded-md">
							View More
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
