export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<p>Footer {currentYear}</p>
		</footer>
	);
}
