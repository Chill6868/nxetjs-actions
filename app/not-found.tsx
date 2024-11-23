import Button from "./components/common/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "404",
	robots: "noindex, follow",
};

export default function notFound() {
	return (
		<main className="pt-64 flex justify-center align-center flex-col text-center h-[calc(100vh)] border border-red-500">
			<h1 className="text-xl font-bold font-display">Not found</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
				fugiat earum est eius repellendus alias quisquam voluptatum laboriosam
				quaerat consequuntur!
			</p>
			<Button href="/">Strona głowna</Button>
		</main>
	);
}
