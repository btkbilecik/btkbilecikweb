"use client";
import { Footer } from "@/components/custom/footer";
import { Header } from "@/components/custom/header";

export default function Projeler() {
	return (
		<>
			<Header />
			<div className="max-w-3xl mx-auto min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-10">
				Projeler zamanla eklenecektir. Eğer bir proje fikriniz varsa bize
				ulaşmaktan çekinmeyin!
			</div>

			<Footer />
		</>
	);
}
