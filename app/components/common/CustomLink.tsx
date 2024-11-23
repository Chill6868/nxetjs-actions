import cn from "@/app/utility/cn";
import Link from "next/link";

interface Props {
	href?: string;
	targetBlank?: boolean;
	underline?: boolean;
	color?: string;
	hover?: "brightness" | "color" | "underline";
	children?: React.ReactNode;
	className?: string;
}

export default function CustomLink({
	href = "/",
	targetBlank = false,
	underline = false,
	color = "primary",
	hover = "brightness",
	children = "Example Link",
	className,
}: Props) {
	return (
		<Link
			className={cn(
				`font-medium text-${color}`,
				{
					[`underline`]: underline === true,
					"transition-[filter] hover:brightness-75": hover === "brightness",
					"transition-[color] hover:text-primary": hover === "color",
					"hover:underline": hover === "underline",
				},
				className
			)}
			href={href}
			{...(targetBlank
				? { target: "_blank", rel: "nofollow noopener noreferrer external" }
				: {})}
			draggable="false"
		>
			{children}
		</Link>
	);
}
