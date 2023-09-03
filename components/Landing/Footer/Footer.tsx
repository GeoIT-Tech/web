import Image from "next/image";
import Link from "next/link";

import logoBlack from "@public/logo-black.svg";
import rightArrowIcon from "@public/icons/right-arrow.svg";
import worldIcon from "@public/icons/world.svg";
import facebookIcon from "@public/icons/facebook.svg";
import twitterIcon from "@public/icons/twitter.svg";
import linkedinIcon from "@public/icons/linkedin.svg";

export function Footer() {
	return (
		<footer>
			<div className="flex flex-col gap-20 pt-24 px-12">
				<div className="flex flex-col md:flex-row justify-between gap-14">
					<div className="flex-1 flex flex-col gap-4">
						<Link href="/">
							<Image src={logoBlack} width={153} height={34} alt="MeNeM Logo Black" />
						</Link>
						<p>
							whitepace was created for the new ways we live and work. We make a
							better workspace around the world
						</p>
					</div>
					<div className="flex-1">
						<h4 className="font-bold text-lg mb-4">Product</h4>
						<ul className="flex flex-col gap-4">
							<li>
								<Link href="#">Overview</Link>
							</li>
							<li>
								<Link href="#">Donations</Link>
							</li>
							<li>
								<Link href="#">Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<h4 className="font-bold text-lg mb-4">Resources</h4>
						<ul className="flex flex-col gap-4">
							<li>
								<Link href="#">Blog</Link>
							</li>
							<li>
								<Link href="#">Guides &amp; tutorials</Link>
							</li>
							<li>
								<Link href="#">Help center</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1">
						<h4 className="font-bold text-lg mb-4">Mobile App</h4>
						<ul className="flex flex-col gap-4">
							<li>
								<Link href="#">Download in Playstore</Link>
							</li>
							<li>
								<Link href="#">Download in Appstore</Link>
							</li>
						</ul>
					</div>
					<div className="flex-1 flex flex-col gap-6">
						<h4 className="text-2xl font-bold">Try It Today</h4>
						<p>Get started for free. Add your whole team as your needs grow.</p>
						<button className="bg-primary-blue w-fit flex flex-row gap-2.5 py-5 px-10 rounded-lg">
							Start today{" "}
							<Image
								src={rightArrowIcon}
								width={14}
								height={14}
								alt="Right Arrow Icon"
								className="self-center"
							/>
						</button>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between gap-20">
					<ul className="flex flex-col md:flex-row gap-10 md:gap-20">
						<li className="flex flw-row gap-1.5 self-center">
							<Image src={worldIcon} width={16} height={16} alt="World Icon" />{" "}
							English
						</li>
						<li className="self-center">Terms &amp; privacy</li>
						<li className="self-center">Security</li>
						<li className="self-center">Status</li>
						<li className="self-center">&copy;2023 MeNeM LLC.</li>
					</ul>
					<div className="flex flex-row gap-8 justify-center">
						<Link href="#">
							<Image
								src={facebookIcon}
								width={9}
								height={16.68}
								alt="Facebook Icon"
							/>
						</Link>
						<Link href="#">
							<Image src={twitterIcon} width={17} height={13.81} alt="Twitter Icon" />
						</Link>
						<Link href="#">
							<Image src={linkedinIcon} width={15} height={15} alt="Linkedin Icon" />
						</Link>
					</div>
				</div>
			</div>
			<div className="border-t py-7 mt-20 border-t-gray-tertiary">
				<p className="text-gray text-center">
					Copyright &reg; 2023 MeNeM All rights Received
				</p>
			</div>
		</footer>
	);
}
