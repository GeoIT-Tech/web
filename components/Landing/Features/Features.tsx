import Image from "next/image";

import yellowHappyIcon from "@public/icons/happy-yellow.svg";
import blueHappyIcon from "@public/icons/happy-blue.svg";
import featuresRecentActivities from "@public/images/features-recent-activities.png";
import featuresWebsiteMockup from "@public/images/features-website-mockup.png";
import featuresDiagram from "@public/images/features-diagram.svg";
import featuresBlueEllipse from "@public/images/features-blue-ellipse.svg";
import featuresBlueEllipseHalf from "@public/images/features-blue-ellipse-half.svg";
import featuresYellowEllipse from "@public/images/features-yellow-ellipse.svg";
import featuresCurvedLine from "@public/images/features-curved-line.svg";

export function Features() {
	return (
		<section className="relative flex flex-col gap-16 mb-44">
			<div className="relative flex flex-col lg:flex-row gap-10 px-10 md:px-20 justify-between">
				<div className="flex flex-col gap-5 lg:gap-10 lg:w-2/5">
					<div className="flex flex-row gap-6">
						<Image
							src={yellowHappyIcon}
							width={58}
							height={58}
							alt="Yellow Happy Face"
						/>
						<div>
							<h4 className="font-medium">Lorem Ipsum is simply dummy text</h4>
							<p className="text-sm text-light-gray">
								Lorem Ipsum is simply dummy text
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-7 lg:gap-14">
						<h3 className="text-3xl font-semibold">
							<span className="text-light-blue">Lorem Ipsum</span> is simply dummy
							text of the printing.
						</h3>
						<p className="text-light-gray-secondary">
							KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
							applications and website builders measuring dozens of completed
							projects. We build and develop mobile applications for several top
							platforms, including Android & IOS.
						</p>
					</div>
				</div>
				<div>
					<Image
						src={featuresRecentActivities}
						width={738}
						height={511}
						alt="Features Recent Activities"
						className="w-full lg:w-[738px]"
					/>
					<Image
						src={featuresBlueEllipseHalf}
						width={250}
						height={505}
						alt="Feature Blue Circle"
						className="absolute right-0 top-0 hidden lg:block"
					/>
				</div>
			</div>
			<div className="relative flex flex-col-reverse lg:flex-row gap-10 px-10 md:px-20 justify-between">
				<div>
					<Image
						src={featuresWebsiteMockup}
						width={582.24}
						height={545}
						alt="Features Website Mockups"
						className="relative z-10 w-full lg:w-[582.24px]"
					/>
					<Image
						src={featuresYellowEllipse}
						width={497}
						height={505}
						alt="Feature Yellow Circle"
						className="absolute left-0 top-0 z-0 hidden lg:block"
					/>
				</div>
				<div className="flex flex-col gap-5 lg:gap-10 lg:w-2/5">
					<div className="flex flex-row gap-6">
						<Image
							src={blueHappyIcon}
							width={58}
							height={58}
							alt="Blue Happy Face"
							className="self-start"
						/>
						<div>
							<h4 className="font-medium">Lorem Ipsum is simply dummy text</h4>
							<p className="text-sm text-light-gray">
								Lorem Ipsum is simply dummy text
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-7 lg:gap-14">
						<h3 className="text-3xl font-semibold">
							Lorem Ipsum is simply dummy text of the printing.
						</h3>
						<p className="text-light-gray-secondary">
							KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
							applications and website builders measuring dozens of completed
							projects. We build and develop mobile applications for several top
							platforms, including Android & IOS.
						</p>
					</div>
				</div>
			</div>
			<div className="relative flex flex-col lg:flex-row gap-10 px-10 md:px-20 justify-between">
				<div className="flex flex-col gap-5 lg:gap-10 lg:w-2/5">
					<div className="flex flex-row gap-6">
						<Image
							src={yellowHappyIcon}
							width={58}
							height={58}
							alt="Yellow Happy Face"
						/>
						<div>
							<h4 className="font-medium">Lorem Ipsum is simply dummy text</h4>
							<p className="text-sm text-light-gray">
								Lorem Ipsum is simply dummy text
							</p>
						</div>
					</div>
					<div className="flex flex-col gap-7 lg:gap-14">
						<h3 className="text-3xl font-semibold">
							<span className="text-light-blue">Lorem Ipsum</span> is simply dummy
							text of the printing.
						</h3>
						<p className="text-light-gray-secondary">
							KODEX TECHNOLOGY (PVT) LTD is a team of experienced mobile and web
							applications and website builders measuring dozens of completed
							projects. We build and develop mobile applications for several top
							platforms, including Android & IOS.
						</p>
					</div>
				</div>
				<div>
					<Image
						src={featuresDiagram}
						width={681}
						height={381.13}
						alt="Features Recent Activities"
						className="relative z-10 w-full lg:w-[681px]"
					/>
					<Image
						src={featuresBlueEllipse}
						width={462}
						height={505}
						alt="Feature Blue Circle"
						className="absolute right-0 -top-28 z-0 hidden lg:block"
					/>
				</div>
			</div>
		</section>
	);
}
