import Image from "next/image";

import LandingForm from "@Landing/LandingForm";
import LandingInput from "@Landing/LandingInput";

import donateUsIllustration from "@public/images/donate-us-illustration.svg";

export function DonateUs() {
	return (
		<section>
			<div className="py-11 px-10 flex flex-col gap-2 text-center">
				<h2 className="font-semibold text-5xl">Donate us</h2>
				<p className="text-gray-text-secondary text-xl">
					Lorem Ipsum is simply dummy text of the printing.
				</p>
			</div>
			<div className="bg-light-blue-secondary px-10 xl:p-32 py-28 flex flex-col lg:flex-row justify-between gap-20">
				<Image
					src={donateUsIllustration}
					width={580.69}
					height={418.52}
					alt="Donate Us Illustration"
				/>
				<div className="flex flex-col gap-6 lg:gap-12 text-center lg:text-left">
					<h3 className="text-2xl">Please choose the payment type</h3>
					<div className="flex flex-row lg:gap-9 gap-3 self-center lg:self-start">
						<button className="bg-white rounded-lg py-3 px-6 text-primary-blue border-2 border-primary-blue">
							Card
						</button>
						<button className="bg-white rounded-lg py-3 px-6 text-primary-blue border-2 border-primary-blue">
							UPI/BHIM
						</button>
					</div>
					<LandingForm submitButtonLabel="Pay now">
						<LandingInput
							id="card_name"
							label="Card name"
							placeholder="Give this card a name"
						/>
						<LandingInput
							id="name_on_card"
							label="Name on card"
							placeholder="Enter Full name"
						/>
						<div className="flex flex-col xl:flex-row gap-4 xl:gap-5 w-full">
							<LandingInput
								id="name_on_card"
								label="Name on card"
								placeholder="Enter Full name"
								containerClassName="w-full"
								className="w-full"
							/>
							<LandingInput
								id="cvc"
								label="CVC"
								placeholder="•••"
								containerClassName="w-full"
								className="w-full"
							/>
						</div>
						<div className="flex flex-col xl:flex-row gap-4 xl:gap-14 justify-between w-full">
							<LandingInput
								id="card_expiry_date"
								label="Card Expiry date"
								placeholder="DD"
								containerClassName="w-full"
								className="w-full"
							/>
							<LandingInput
								id="card_expiry_month"
								label=""
								placeholder="MM"
								containerClassName="self-end w-full"
								className="w-full"
							/>
							<LandingInput
								id="card_expiry_year"
								label=""
								placeholder="YYYY"
								containerClassName="self-end w-full"
								className="w-full"
							/>
						</div>
					</LandingForm>
				</div>
			</div>
		</section>
	);
}
