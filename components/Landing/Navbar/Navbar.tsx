import Image from "next/image";
import Link from "next/link";

import menemLogo from "@public/logo.svg";
import loginIcon from "@public/icons/login.svg";
import navbarIcon from "@public/icons/navbar-icon.svg";

export function Navbar() {
	return (
		<nav className="h-[10%] w-full flex flex-row justify-between items-center py-6 px-10 lg:px-12">
			<Link href="/">
				<Image src={menemLogo} width={153} height={34} alt="MeNeM Logo"></Image>
			</Link>
			<ul className="flex flex-row gap-x-6 lg:gap-x-12 text-dark-blue font-medium text-sm items-center">
				<ul className="lg:flex flex-row gap-x-12 hidden">
					<li className="self-center">
						<Link href="/">Why MeNeM</Link>
					</li>
					<li className="self-center">
						<Link href="what-we-do">What we do</Link>
					</li>
					<li className="self-center">
						<Link href="donation">Donation</Link>
					</li>
					<li className="self-center">
						<Link href="#">Contact</Link>
					</li>
					<li className="self-center">
						<button className="text-primary-blue w-36 h-12 border-2 border-primary-blue rounded-xl">
							Join MeNeM
						</button>
					</li>
				</ul>
				<li>
					<button className="text-primary-blue w-20 h-10 border-2 border-primary-blue rounded-xl flex flex-row items-center justify-center gap-x-1 lg:border-none lg:w-auto lg:h-auto lg:text-dark-blue">
						<Image
							src={loginIcon}
							width={16}
							height={16}
							alt="Person Icon"
							className="hidden lg:block"
						></Image>{" "}
						Login
					</button>
				</li>
				<li className="block lg:hidden">
					<Image src={navbarIcon} width={20} height={20} alt="Navbar Icon" />
				</li>
			</ul>
		</nav>
	);
}
