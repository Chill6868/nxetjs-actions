"use client";

import cn from "@/app/utility/cn";
import React, { useState, useEffect } from "react";

export default function Navigation() {
	const [navMenuOpen, setNavMenuOpen] = useState(false);
	const [navMenuHeight, setNavMenuHeight] = useState<string>();

	useEffect(() => {
		const getNavMenuHeight = () => {
			const navMenuBox = document.querySelector(".nav-menu-box");
			return navMenuBox ? `${navMenuBox.clientHeight}px` : "0px";
		};

		setNavMenuHeight(getNavMenuHeight());
	}, []);

	// useEffect(() => {
	// 	if (navMenuOpen) {
	// 		document.body.style.overflow = "hidden";
	// 	} else {
	// 		document.body.style.overflow = "";
	// 	}
	// }, [navMenuOpen]);

	return (
		<nav className="z-50 fixed inset-x-0 shadow-sm">
			<div className="h-64 container flex justify-between items-center">
				<div className="-z-10 absolute inset-0 bg-white/50 backdrop-blur-xl"></div>
				<span>logo</span>
				<div className="hidden lg:flex gap-12">
					<span>aha1</span>
					<span>aha2</span>
					<span>aha3</span>
				</div>
				<button
					className="w-32 h-32 flex flex-col justify-center items-center gap-4 lg:hidden"
					onClick={() => {
						setNavMenuOpen(!navMenuOpen);
					}}
					aria-label="Otwórz menu nawigacji"
					aria-expanded={navMenuOpen}
				>
					<span
						className={cn(
							"h-[2px] w-3/4 bg-black rounded-full transition-transform",
							{
								"translate-y-[6px] rotate-45": navMenuOpen,
							}
						)}
					></span>
					<span
						className={cn(
							"h-[2px] w-3/4 bg-black rounded-full transition-[opacity,transform]",
							{
								"opacity-0 rotate-45": navMenuOpen,
							}
						)}
					></span>
					<span
						className={cn(
							"h-[2px] w-3/4 bg-black rounded-full transition-transform",
							{
								"-translate-y-[6px] -rotate-45": navMenuOpen,
							}
						)}
					></span>
				</button>
			</div>
			<div
				className="overflow-hidden w-full transition-all"
				style={
					{
						height: navMenuOpen ? `${navMenuHeight}` : "0",
						opacity: navMenuOpen ? "1" : "0",
					} as React.CSSProperties
				}
			>
				<div className="nav-menu-box container">
					<div className="flex flex-col py-4">
						<p>link1</p>
						<p>link2</p>
						<p>link3</p>
					</div>
				</div>
			</div>
			{/* <div
				className="-z-10 fixed inset-0 bg-white/50 backdrop-blur-xl transition-transform"
				style={
					{
						transform: navMenuOpen ? "translateX(0%)" : "translateX(100%)",
					} as React.CSSProperties
				}
			></div> */}
		</nav>
	);
}
