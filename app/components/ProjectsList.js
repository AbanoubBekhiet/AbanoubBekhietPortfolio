"use client";
import dahab from "../../public/dahab.png";
import dahsboard from "../../public/dahsboard.png";
import malika from "../../public/malika.png";
import inventory_new from "../../public/inventory_new.png";
import table from "../../public/table.png";
import tawzif from "../../public/tawzif.png";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ProjectCard from "./ProjectCard";

if (typeof window !== "undefined") {
	gsap.registerPlugin(ScrollTrigger);
}

export default function ProjectsList() {
	const scrollRef = useRef(null);
	const triggerRef = useRef(null);

	useGSAP(
		() => {
			const pinElement = scrollRef.current;
			const triggerElement = triggerRef.current;

			const totalWidth = pinElement.scrollWidth;
			const viewportWidth = window.innerWidth;
			const horizontalDistance = totalWidth - viewportWidth;

			const tl = gsap.to(pinElement, {
				x: -horizontalDistance,
				ease: "none",
				scrollTrigger: {
					trigger: triggerElement,
					pin: true,
					start: "top top",
					scrub: 2,
					end: () => `+=${horizontalDistance}`,
					invalidateOnRefresh: true,
				},
			});

			return () => {
				if (tl.scrollTrigger) tl.scrollTrigger.kill();
				tl.kill();
			};
		},
		{ scope: triggerRef },
	);

	return (
		<section
			ref={triggerRef}
			className="bg-white dark:bg-black min-h-screen overflow-hidden my-12"
		>
			<div className="flex flex-col justify-center py-8 ">
				<div className="px-12 mb-8 flex flex-col items-center">
					<h2 className="text-4xl font-bold text-black dark:text-white">
						Featured Work
					</h2>
					<p className="text-blue">High-quality responsive projects</p>
				</div>

				<div ref={scrollRef} className="flex flex-nowrap gap-12 px-12 w-max">
					<ProjectCard
						image={dahsboard}
						tools={["React", "Supabase", "Tailwind CSS", "shadcn/ui"]}
						title="abu-eldahab dashboard"
						description="Its a dashboard for managing abu-eldahab E-commerce website."
						website=""
						github="https://github.com/AbanoubBekhiet/Abu-Eldahab-store-admin"
						video="https://youtu.be/gY30Sq3TfpA?si=-t1Y5bBRMFSH3OMK"
					/>
					<ProjectCard
						image={malika}
						tools={["React", "Tailwind CSS"]}
						title="Elmalika E-commerce website"
						description="Its only a frontend implementation for customer and dashboard for managing food delivery website ."
						website="https://queen.kitchen/"
						github="https://github.com/AbanoubBekhiet/Elmalika_resturant"
						video="https://youtu.be/BEmzRt8ci0U?si=GENuY10aPanPY_yJ"
					/>
					<ProjectCard
						image={inventory_new}
						tools={["Laravel", "Blade", "CSS", "php", "mysql", "javascript"]}
						title="Inventory management system"
						description="a fullstack inventory management system built with laravel and blade for a local store to manage their inventory and sales with managing products, categories, customers, and generating sales reports ,and statistics."
						github="https://github.com/AbanoubBekhiet/inventory_managment_system_desktop"
						video="https://youtu.be/_Ez8CEkxTr8?si=TvLAgNBKVwyQKkTT"
					/>
					<ProjectCard
						image={dahab}
						tools={["Next.js", "Supabase", "Tailwind CSS", "shadcn/ui"]}
						title="abu-eldahab website"
						description="Its a customer portal for buying products  ."
						website="https://abu-eldahab.vercel.app/"
						github="https://github.com/AbanoubBekhiet/Abu-Eldahab-store"
						video="https://youtu.be/gY30Sq3TfpA?si=3ckIqJsc0JHy6ODU"
					/>

					<ProjectCard
						image={table}
						tools={["Laravel", "php", "CSS", "javascript", "mysql", "blade"]}
						title="Time table management system "
						description="Its a fullstack time table management system built with laravel and blade for a local school to manage their time tables for different classes and teachers with features like generating time tables based on subjects, teachers, and classrooms availability."
						website=""
						github="https://github.com/AbanoubBekhiet/weekly_table_project"
						video="https://youtu.be/21PGtA_oYk0?si=YrXRaF99Lt1DNrtI"
					/>
					<ProjectCard
						image={tawzif}
						tools={["Laravel", "php", "CSS", "mysql", "blade"]}
						title="Jobs portal website "
						description="Its a fullstack jobs portal website built with laravel and blade for a local company to manage their job postings and applications."
						github="https://github.com/AbanoubBekhiet/jobs_website"
						video="https://www.youtube.com/watch?v=rqrHTh7s2jg&t=2s"
					/>
				</div>
			</div>
		</section>
	);
}
