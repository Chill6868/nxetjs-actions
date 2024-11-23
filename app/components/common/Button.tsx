"use client";

import cn from "@/app/utility/cn";
import Link from "next/link";
import { useEffect } from "react";

interface Props {
	backgroundClassName?: string;
	backgroundGradient?: boolean;
	borderClassName?: string;
	borderGradient?: boolean;
	borderRadiusClassName?: string;
	paddingClassName?: string;
	textClassName?: string;
	clickAnimation?: "pulse";
	hover?: "brightness";
	children?: React.ReactNode;
	className?: string;
	formSendClass?: string;
	href?: string;
	targetBlank?: boolean;
}

export default function Button({
	backgroundClassName = "background-button",
	backgroundGradient = false,
	borderClassName = "border-[2px] border-button",
	borderGradient = false,
	borderRadiusClassName = "rounded-full",
	paddingClassName = "px-32 py-16",
	textClassName = "text-white",
	clickAnimation = "pulse",
	hover = "brightness",
	children = "Example Button",
	className,
	formSendClass = "",
	href = "",
	targetBlank = false,
}: Props) {
	let appendedAnimationElementGlobal: HTMLDivElement;

	useEffect(() => {
		const appendedAnimationElementGlobalAll = document.querySelectorAll(
			".click-animation-element"
		);
		appendedAnimationElementGlobalAll.forEach((element) => {
			element.remove();
		});
	}, []);

	const getDefaultTransitionDuration = (): number => {
		const rootStyles = getComputedStyle(document.documentElement);
		const transitionDuration: string | null = rootStyles
			.getPropertyValue("--transition-duration-default")
			.trim();

		if (!transitionDuration) {
			console.warn("Transition duration not found, returning default 0.");
			return 0;
		}

		if (transitionDuration.endsWith("ms")) {
			return parseFloat(transitionDuration);
		} else if (transitionDuration.endsWith("s")) {
			return parseFloat(transitionDuration) * 1000;
		}
		return 0;
	};

	const handleHideClickAnimation = () => {
		if (appendedAnimationElementGlobal) {
			appendedAnimationElementGlobal.style.opacity = "0";
			const appendedAnimationElement = appendedAnimationElementGlobal;
			setTimeout(() => {
				appendedAnimationElement.remove();
			}, getDefaultTransitionDuration());
		}
	};

	const handleHideClickAnimationAll = () => {
		const appendedAnimationElementAll = document.querySelectorAll(
			".click-animation-element"
		);
		appendedAnimationElementAll.forEach((element) => {
			if (element instanceof HTMLElement) {
				element.style.opacity = "0";
				setTimeout(() => {
					element.remove();
				}, getDefaultTransitionDuration());
			}
		});
	};

	const handleClickAnimation = (e: React.MouseEvent<HTMLElement>) => {
		const btnAnimationItemRemains = (e.target as HTMLElement).querySelectorAll(
			".click-animation-element"
		) as NodeListOf<HTMLElement>;

		btnAnimationItemRemains.forEach((remain) => {
			remain.style.opacity = "0";
			setTimeout(() => {
				remain.remove();
			}, getDefaultTransitionDuration());
		});

		const animationElement = document.createElement("div");
		appendedAnimationElementGlobal = animationElement;
		animationElement.classList.add("click-animation-element");

		const offsetX = e.nativeEvent.offsetX;
		const offsetY = e.nativeEvent.offsetY;

		animationElement.style.top = `${offsetY}px`;
		animationElement.style.left = `${offsetX}px`;

		const targetElement = e.target as HTMLElement;
		targetElement.append(animationElement);

		const appendedAnimationElement = targetElement.querySelector(
			".click-animation-element"
		) as HTMLElement;

		const appendedAnimationElementParent = appendedAnimationElement.closest(
			"button, a"
		) as HTMLElement;

		if (appendedAnimationElementParent) {
			const appendedAnimationElementWidth =
				appendedAnimationElementParent.offsetWidth;

			animationElement.style.setProperty(
				"--click-animation-pulse-size",
				`${appendedAnimationElementWidth * 2.5}px`
			);
		}
	};

	if (href === "") {
		return (
			<button
				onMouseDown={(e) => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleClickAnimation(e);
						if (formSendClass !== "") console.log("clicked send form");
					}
				}}
				onMouseUp={() => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleHideClickAnimation();
					}
				}}
				onMouseLeave={() => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleHideClickAnimation();
					}
				}}
				className={cn(
					`cursor-pointer overflow-hidden relative flex justify-center items-center ${paddingClassName} ${borderRadiusClassName} ${formSendClass}`,
					{
						"[&>.btnchld]:hover:brightness-75 [&>.btnchld]:transition-[filter]":
							hover === "brightness",
					},
					className
				)}
			>
				<div
					className={cn(
						`btnchld pointer-events-none absolute inset-0 ${borderRadiusClassName} ${backgroundClassName}`,
						{
							"bg-gradient-to-r from-primary-300 to-primary":
								backgroundGradient === true,
						}
					)}
				></div>
				<div
					className={cn(
						`btnchld pointer-events-none absolute inset-0 ${borderRadiusClassName} ${borderClassName}`,
						{
							"border-transparent bg-origin-border bg-gradient-to-r from-primary-300 to-primary [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude_!important]":
								borderGradient === true || backgroundGradient === true,
						}
					)}
				></div>
				<span
					className={`relative pointer-events-none text-lg font-button ${textClassName}`}
				>
					{children}
				</span>
			</button>
		);
	} else {
		return (
			<Link
				onMouseDown={(e) => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleClickAnimation(e);
						if (formSendClass !== "") console.log("clicked send form");
					}
				}}
				onMouseUp={() => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleHideClickAnimation();
					}
				}}
				onMouseLeave={() => {
					if (window.innerWidth >= 1280) {
						if (clickAnimation === "pulse") handleHideClickAnimationAll();
					}
				}}
				className={cn(
					`cursor-pointer overflow-hidden relative flex justify-center items-center ${paddingClassName} ${borderRadiusClassName} ${formSendClass}`,
					{
						"[&>.btnchld]:hover:brightness-75 [&>.btnchld]:transition-[filter]":
							hover === "brightness",
					},
					className
				)}
				href={href}
				{...(targetBlank
					? { target: "_blank", rel: "nofollow noopener noreferrer external" }
					: {})}
				draggable="false"
			>
				<div
					className={cn(
						`btnchld pointer-events-none absolute inset-0 ${borderRadiusClassName} ${backgroundClassName}`,
						{
							"bg-gradient-to-r from-primary-300 to-primary":
								backgroundGradient === true,
						}
					)}
				></div>
				<div
					className={cn(
						`btnchld pointer-events-none absolute inset-0 ${borderRadiusClassName} ${borderClassName}`,
						{
							"border-transparent bg-origin-border bg-gradient-to-r from-primary-300 to-primary [mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] [-webkit-mask-composite:destination-out] [mask-composite:exclude_!important]":
								borderGradient === true || backgroundGradient === true,
						}
					)}
				></div>
				<span
					className={`relative pointer-events-none text-lg font-button ${textClassName}`}
				>
					{children}
				</span>
			</Link>
		);
	}
}
