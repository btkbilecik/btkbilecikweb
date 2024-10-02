"use client";

import { Logo } from "../utils/logo";
import Link from "next/link";
import { ModeToggle } from "../utils/mode-toggle";

export function Footer() {
	return (
		<>
			<footer className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="flex flex-wrap justify-between items-center mx-auto gap-2">
					<div className="inline-flex items-center">
						<Logo className="w-12 h-auto" />
						<div className="border-s ps-5 ms-5">
							<p className="text-sm text-muted-foreground">
								Bilgisayar ve Teknoloji Kulübü
							</p>
						</div>
					</div>
					<ul className="flex flex-wrap items-center">
						<li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-first">
							<Link
								className="text-xs text-muted-foreground underline hover:text-first hover:decoration-2 focus:outline-none focus:decoration-2"
								href="https://instagram.com/btkbilecik"
							>
								Instagram
							</Link>
						</li>
						<li className="inline-block relative pe-4 text-xs last:pe-0 last-of-type:before:hidden before:absolute before:top-1/2 before:end-1.5 before:-translate-y-1/2 before:size-[3px] before:rounded-full before:bg-first">
							<Link
								className="text-xs text-muted-foreground underline hover:text-first hover:decoration-2 focus:outline-none focus:decoration-2"
								href="https://linkedin.com/company/bilgisayar-ve-teknoloji-kul%C3%BCb%C3%BC"
							>
								Linkedin
							</Link>
						</li>
						<li className="inline-block pe-4 text-xs">
							<Link
								className="text-xs text-muted-foreground underline hover:text-first hover:decoration-2 focus:outline-none focus:decoration-2"
								href="https://github.com/btkbilecik"
							>
								Github
							</Link>
						</li>
						<li className="inline-block">
							<ModeToggle />
						</li>
					</ul>
				</div>
			</footer>
		</>
	);
}
