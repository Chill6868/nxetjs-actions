import Button from "./components/common/Button";
import Scroller from "./components/common/Scroller";
import SectionTitle from "./components/common/SectionTitle";
import CustomLink from "./components/common/CustomLink";
import Accordion from "./components/ui/AccordionItem";
import ExampleGallery from "./components/custom/ExampleGallery";
import ExampleSwiper from "./components/custom/ExampleSwiper";

export default function Home() {
	return (
		<main className="bg-slate-800 h-[300vh]">
			<p className="text-white text-xl">home page</p>
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
			<Accordion />
			<Accordion isOpened />
			<ExampleGallery />
			<ExampleSwiper />
			<Button className="button-slide-prev">prev</Button>
			<Button className="button-slide-next">next</Button>
		</main>
	);
}
