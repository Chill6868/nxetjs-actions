import cn from "@/app/utility/cn";

interface Props {
	imgSrc?: string;
	thumbnailSrc?: string;
	thumbnailAlt?: string;
	imgWidth?: number;
	imgHeight?: number;
	thumbnailWidth?: number;
	thumbnailHeight?: number;
	className?: string;
}

export default function PhotoSwipeItem({
	imgSrc = "https://royalarcadenorwich.co.uk/wp-content/uploads/2017/07/200x200.png",
	thumbnailSrc = "https://royalarcadenorwich.co.uk/wp-content/uploads/2017/07/200x200.png",
	thumbnailAlt = "Default Alt Text",
	imgWidth = 200,
	imgHeight = 200,
	thumbnailWidth = 200,
	thumbnailHeight = 200,
	className,
}: Props) {
	return (
		<a
			href={`${imgSrc}`}
			data-pswp-width={`${imgWidth}`}
			data-pswp-height={`${imgHeight}`}
			target="_blank"
		>
			<img
				className={cn(className)}
				src={`${thumbnailSrc}`}
				alt={`${thumbnailAlt}`}
				width={`${thumbnailWidth}`}
				height={`${thumbnailHeight}`}
			/>
		</a>
	);
}
