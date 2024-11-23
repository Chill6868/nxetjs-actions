"use client";

import cn from "@/app/utility/cn";
import React, { useState, useEffect, useId } from "react";

interface Props {
	isOpened?: boolean;
	BoxTitleClassName?: string;
	BoxContentClassName?: string;
	className?: string;
}

export default function AccordionItem({
	isOpened = false,
	BoxTitleClassName,
	BoxContentClassName,
	className,
}: Props) {
	const [accordionOpen, setAccordionOpen] = useState(isOpened);
	const [boxContentHeight, setBoxContentHeight] = useState<string>();

	// Generowanie unikalnych identyfikatorów
	const uniqueId = useId(); // np. `:r0:`

	useEffect(() => {
		const getBoxContentHeight = () => {
			const boxContentText = document.querySelector(".box-content-text");
			return boxContentText ? `${boxContentText.clientHeight}px` : "0px";
		};

		setBoxContentHeight(getBoxContentHeight());
	}, []);

	return (
		<div
			className={cn(
				"w-[500px] border bg-gray-900 text-white rounded",
				className
			)}
		>
			<button
				id={`${uniqueId}`}
				className={cn(
					"w-full p-16 flex flex-row justify-between items-center gap-4",
					BoxTitleClassName
				)}
				onClick={() => {
					setAccordionOpen(!accordionOpen);
				}}
				aria-expanded={accordionOpen}
				aria-controls={`${uniqueId}-content`}
			>
				<h2 className="text-start text-lg font-bold">Tytuł sekcji</h2>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
					className={cn(
						"lucide lucide-chevron-down transition-transform shrink-0",
						{
							"rotate-180": accordionOpen,
						}
					)}
				>
					<path d="m6 9 6 6 6-6" />
				</svg>
			</button>
			<div
				id={`${uniqueId}-content`}
				className={cn(
					`overflow-hidden transition-[height,opacity]`,
					BoxContentClassName
				)}
				aria-labelledby={`${uniqueId}`}
				style={
					{
						height: accordionOpen ? `${boxContentHeight}` : "0",
						opacity: accordionOpen ? "1" : "0",
					} as React.CSSProperties
				}
			>
				<p className="box-content-text p-16 pt-0">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iusto
					velit laboriosam dolorem quos facilis nisi veniam tempore distinctio
					reiciendis dicta voluptatibus tempora quia reprehenderit, praesentium
					cum, officiis deleniti dolore cupiditate excepturi, alias asperiores
					inventore suscipit.
				</p>
			</div>
		</div>
	);
}
