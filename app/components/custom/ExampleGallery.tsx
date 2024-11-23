"use client";

import { useEffect } from "react";

import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import PhotoSwipeItem from "../ui/PhotoSwipeItem";

export default function ExampleGallery() {
	useEffect(() => {
		const lightbox = new PhotoSwipeLightbox({
			gallery: "#photoswipe-gallery",
			children: "a",
			pswpModule: () => import("photoswipe"),
		});
		lightbox.init();
	}, []);

	return (
		<div id="photoswipe-gallery" className="flex gap-16">
			<PhotoSwipeItem />
			<PhotoSwipeItem />
			<PhotoSwipeItem />
		</div>
	);
}
