import type { ReactNode } from "react";
import Link from "next/link";

interface LandingFormProps {
	className?: string;
	submitButtonLabel?: string;
	children: ReactNode;
}

export function LandingForm({ className, submitButtonLabel, children }: LandingFormProps) {
	return (
		<form className={`${className} p-8 bg-white rounded-lg shadow-lg z-20 flex flex-col gap-4`}>
			{children}
			<div className="flex flex-row justify-between">
				<button
					type="submit"
					className="bg-blue-secondary text-white py-3 px-12 rounded-full font-semibold"
				>
					{submitButtonLabel ? submitButtonLabel : "Submit"}
				</button>
				<Link href="#" className="self-center text-dark-blue-secondary font-medium">
					Privacy Policy
				</Link>
			</div>
		</form>
	);
}
