import cn from "@/app/utility/cn";

interface Props {
	align?: "vertical" | "horizontal";
	gap?: string;
	duration?: string;
	direction?: "right" | "left";
	children?: React.ReactNode;
	className?: string;
}

export default function Scroller({
	align = "horizontal",
	gap = "2rem",
	duration = "10s",
	direction = "right",
	children,
	className,
}: Props) {
	return (
		<div
			className={cn(
				"scroller overflow-hidden",
				{
					"[mask-image:linear-gradient(180deg,transparent_0%,#fff_20%,#fff_80%,transparent_100%)]":
						align === "vertical",
					"[mask-image:linear-gradient(90deg,transparent_0%,#fff_20%,#fff_80%,transparent_100%)]":
						align === "horizontal",
				},
				className
			)}
		>
			<div
				className={cn(
					"scroller-wrapper flex gap-[var(--gap)] lg:hover:[animation-play-state:paused]",
					{
						"h-max w-full flex-col animate-carouselAutoScrollVertical":
							align === "vertical",
						"h-full w-max flex-row animate-carouselAutoScrollHorizontal":
							align === "horizontal",
					}
				)}
				style={
					{
						"--gap": gap,
						"--duration": duration,
						"--direction": direction === "right" ? "reverse" : "forwards",
					} as React.CSSProperties
				}
			>
				<div>{children}</div>
				<div aria-hidden="true">{children}</div>
			</div>
		</div>
	);
}
