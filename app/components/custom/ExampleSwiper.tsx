"use client";

import { useEffect } from "react";

import Swiper from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export default function ExampleSwiper() {
	useEffect(() => {
		new Swiper(".swiper", {
			modules: [Autoplay, Navigation],
			loop: true,
			slidesPerView: 1,
			spaceBetween: 16,
			breakpoints: {
				640: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".button-slide-next",
				prevEl: ".button-slide-prev",
			},
		});
	}, []);

	return (
		<div className="swiper">
			<div className="swiper-wrapper">
				<div className="swiper-slide">
					<div>Slide 1</div>
				</div>
				<div className="swiper-slide">
					<div>Slide 2</div>
				</div>
				<div className="swiper-slide">
					<div>Slide 3</div>
				</div>
				<div className="swiper-slide">
					<div>Slide 4</div>
				</div>
			</div>
		</div>
	);
}
