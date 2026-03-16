"use client";
import Badge from "./ui/Badge";
import HeroHeadings from "./components/HeroHeadings";
import HeroImage from "./components/HeroImage";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);
function Page() {
	const container = useRef();
	useGSAP(
		() => {
			const split = new SplitText(".split-text", {
				type: "lines, words, chars",
				linesClass: "overflow-hidden",
			});

			const tl = gsap.timeline({});

			tl.from(split.chars, {
				y: 50,
				autoAlpha: 0,
				stagger: 0.03,
				duration: 0.8,
				ease: "back.out(1.7)",
			})
				.from(
					".hero-image",
					{
						scale: 0.8,
						autoAlpha: 0,
						duration: 0.6,
					},
					"-=0.4",
				)
				.to(
					".layout",
					{
						y: 500,
						duration: 0.8,
						ease: "power4.inOut",
						display: "none",
					},
					"-=0.2",
				);
		},
		{ scope: container },
	);
	return (
		<main
			ref={container}
			className=" flex flex-col items-center text-center h-[100vh] pt-12"
		>
			<HeroHeadings />
			<Badge text="Faculty of Computers & AI • Sadat City University" />
			<section className="mt-4">
				<h2 className="text-lg font-medium text-gray-dark dark:text-gray-light">
					Crafting high-performance web experiences with
					<span className="text-blue font-bold"> React</span>,
					<span className="text-blue font-bold">Next.js</span>, and
					<span className="text-blue font-bold"> GSAP</span>.
				</h2>
			</section>
			<HeroImage />
			<section className="mt-8 flex items-center justify-between gap-4 mb-8">
				<button className="flex items-center justify-between gap-2 rounded-2xl bg-blue px-6 py-3 text-white transition-transform duration-300 hover:scale-105  cursor-pointer">
					View My Work <FaLongArrowAltRight />
				</button>
				<button className="flex items-center justify-between rounded-2xl bg-extra-white dark:bg-[#21283a] px-6 py-3 text-dark dark:text-white  transition-transform duration-300 hover:scale-105  cursor-pointer">
					Resume
				</button>
			</section>
		</main>
	);
}
export default Page;
