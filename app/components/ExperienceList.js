import { PiBag } from "react-icons/pi";
import ExperienceCard from "./ExperienceCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
gsap.registerPlugin(ScrollTrigger);

function ExperienceList() {
	useGSAP(() => {
		gsap.from(".experience-card", {
			x: -80,
			duration: 2,
			stagger: 0.1,
			ease: "bounce.out",
			scrollTrigger: {
				trigger: ".experience-container",
				start: "top 85%",
				toggleActions: "play none none reverse",
			},
		});
	});

	return (
		<section>
			<section className="flex items-center gap-2 mb-4">
				<PiBag className="text-blue text-2xl" />
				<h2 className="text-2xl text-blue">Professional Experience</h2>
			</section>
			<section className="flex flex-col experience-container">
				<ExperienceCard
					date="2025/06 – 2025/11"
					title="Jonas Schmedtmann on Udemy React,Next.js course"
					description="It was an impressive course that I learned from it alot like  React ,Nextjs ,tailwindcss ,supabase ,styled components ,react router,redux,react query and more. "
				/>
				<ExperienceCard
					date="2025/08 – 2025/09"
					title="React frontend developer intern"
					description="information technology institute. it was a great opportunity to learn and practice react in front end development"
				/>
				<ExperienceCard
					date="2024/04 – 2024/10"
					title="Fullstack web developer using php and laravel"
					description="Digital Egypt Pioneers Initiative - DEPI. it was a very helpful trainning I learned and practiced on web server-side and client-side technologies and I made during the training alot of projects"
				/>
				<ExperienceCard
					date="2023/07 – 2023/08"
					title="Fullstack web developer using php and laravel"
					description="information technology institute menofia. it was a good chance to learn and practice on backend using laravel and also deal with html,css,js"
				/>{" "}
			</section>
		</section>
	);
}

export default ExperienceList;
