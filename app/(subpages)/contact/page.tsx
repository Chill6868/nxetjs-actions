import Button from "../../components/common/Button";
import Scroller from "../../components/common/Scroller";
import SectionTitle from "../../components/common/SectionTitle";
import CustomLink from "../../components/common/CustomLink";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Default description",
	openGraph: {
		url: "https://example.pl/contact",
	},
};

export default function Home() {
	return (
		<main className="bg-slate-800">
			<p>contact page</p>
			<Button backgroundClassName="bg-black" />
			<Button>aha123ojkfdnaoifnwaiofwai</Button>
			<Button formSendClass="form-contact-send" />
			<Button href="/">home</Button>
			<Button href="/contact">contact</Button>
			<Scroller>
				<p>okej</p>
				<p>ja pierdole</p>
			</Scroller>
			<SectionTitle />
			<CustomLink href="/contact">contact</CustomLink>
			<CustomLink href="https://facebook.com" targetBlank>
				facebook
			</CustomLink>
		</main>
	);
}
