import cn from "@/app/utility/cn";

interface Props {
	title?: string;
	subtitle?: string;
	tac?: boolean;
	className?: string;
}

export default function SectionTitle({
	title = "Section title example",
	subtitle = "Section subtitle example",
	tac = false,
	className,
}: Props) {
	return (
		<div
			className={cn(
				"mb-7 flex flex-col items-start",
				{
					"items-center text-center": tac === true,
				},
				className
			)}
		>
			<span className="bg-gradient-to-r from-primary-300 to-primary text-transparent bg-clip-text font-semibold">
				{subtitle}
			</span>
			<h2 className="text-[2.8rem] sm:text-section-title font-bold font-display leading-[130%]">
				{title}
			</h2>
		</div>
	);
}
