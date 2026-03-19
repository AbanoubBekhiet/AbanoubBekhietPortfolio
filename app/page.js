"use client";
import Badge from "./ui/Badge";
import HeroHeadings from "./components/HeroHeadings";
import HeroImage from "./components/HeroImage";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ProjectsList from "./components/ProjectsList";
import SkillsList from "./components/SkillsList";
import ExperienceList from "./components/ExperienceList";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Contact from "./components/Contact";
import Link from "next/link";
import { IoTerminalOutline } from "react-icons/io5";

gsap.registerPlugin(SplitText, ScrollTrigger, ScrollSmoother);
function Page() {
	const mainRef = useRef();
	const smootherRef = useRef();
	const terminalRef = useRef();
	useGSAP(
		() => {
			smootherRef.current = ScrollSmoother.create({
				wrapper: "#wrapper",
				content: "#content",
				smooth: 3,
				effects: true,
			});

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

			const xTo = gsap.quickTo(terminalRef.current, "x", {
				duration: 0.4,
				ease: "power3",
			});
			const yTo = gsap.quickTo(terminalRef.current, "y", {
				duration: 0.4,
				ease: "power3",
			});

			const handleMouseMove = (e) => {
				xTo(e.clientX + 20);
				yTo(e.clientY + 20);
			};

			window.addEventListener("mousemove", handleMouseMove);

			return () => window.removeEventListener("mousemove", handleMouseMove);
		},
		{ scope: mainRef },
	);
	const scrollToProjects = () => {
		if (smootherRef.current) {
			smootherRef.current.scrollTo("#projects", true, "top top");
		}
	};
	return (
		<main id="wrapper" ref={mainRef}>
			<div
				ref={terminalRef}
				className="hidden sm:flex fixed top-0 left-0 pointer-events-none z-[9999] text-blue opacity-70 "
			>
				<IoTerminalOutline size={40} />
			</div>
			<section id="content">
				<section className=" flex flex-col items-center text-center  pt-8 ">
					<HeroHeadings />
					<Badge text="Faculty of Computers & AI • Sadat City University" />
					<section className="mt-4">
						<h2 className="text-lg font-medium text-gray-dark dark:text-gray-light">
							Crafting high-performance web experiences with
							<span className="text-blue font-bold"> React</span>,
							<span className="text-blue font-bold">Next.js</span>
						</h2>
					</section>
					<HeroImage />
					<section className="mt-8 flex items-center justify-between gap-4 mb-8">
						<button
							onClick={scrollToProjects}
							className="flex items-center justify-between gap-2 rounded-2xl bg-blue px-6 py-3 text-white transition-transform duration-300 hover:scale-105  cursor-pointer"
						>
							View My Work <FaLongArrowAltRight />
						</button>
						<button className="flex items-center justify-between rounded-2xl bg-extra-white dark:bg-[#21283a] px-6 py-3 text-dark dark:text-white  transition-transform duration-300 hover:scale-105  cursor-pointer">
							<Link href="myResume">Resume</Link>
						</button>
					</section>
				</section>
				<section id="projects">
					<ProjectsList />
				</section>
				<section className="p-8 bg-gray-light dark:bg-black ">
					<SkillsList />
				</section>
				<section className="p-8 bg-white dark:bg-black ">
					<ExperienceList />
				</section>
				<section className="mt-4 bg-white dark:bg-black ">
					<Contact />
				</section>
			</section>
		</main>
	);
}
export default Page;
