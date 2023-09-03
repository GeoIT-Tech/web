interface LandingInput {
	id: string;
	label: string;
	type?: string;
	placeholder: string;
	className?: string;
	containerClassName?: string;
}

export function LandingInput({
	id,
	label,
	type,
	placeholder,
	className,
	containerClassName,
}: LandingInput) {
	return (
		<div className={`${containerClassName} flex flex-col gap-1`}>
			<label htmlFor={id} className="text-gray-label text-xs">
				{label}
			</label>
			<input
				type={type ? type : "text"}
				id={id}
				placeholder={placeholder}
				className={`${className} border-2 border-gray-border rounded-lg p-3 placeholder:gray-text`}
			/>
		</div>
	);
}
