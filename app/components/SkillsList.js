import { IoTerminal } from "react-icons/io5";
import SkillCard from "./SkillCard";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiGsap } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { BiLogoJquery } from "react-icons/bi";
import { TbWashDryShade } from "react-icons/tb";
import { FaJsSquare } from "react-icons/fa";
import { RiPhpLine } from "react-icons/ri";
import { SiReactquery } from "react-icons/si";
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiZod } from "react-icons/si";
import { SiReacthookform } from "react-icons/si";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
function SkillsList() {
	useGSAP(() => {
		gsap.from(".skill-card", {
			y: 80,
			x: -20,
			opacity: 0,
			duration: 2,
			stagger: 0.1,
			ease: "bounce.out",
			scrollTrigger: {
				trigger: ".grid",
				start: "top 85%",
				scrub: true,
			},
		});
	});
	return (
		<section>
			<section className="flex items-center gap-2 mb-4">
				<IoTerminal className="text-blue" />
				<h2 className="text-2xl text-blue">Technical Expertise</h2>
			</section>
			<section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				<SkillCard className="skill-card" icon={<FaReact />} title="React" />
				<SkillCard
					className="skill-card"
					icon={<RiNextjsFill />}
					title="Next.js"
				/>
				<SkillCard
					className="skill-card"
					icon={<FaJsSquare />}
					title="JavaScript"
				/>
				<SkillCard
					className="skill-card"
					icon={<SiReactquery />}
					title="React Query"
				/>
				<SkillCard
					className="skill-card"
					icon={<SiReactrouter />}
					title="React Router"
				/>
				<SkillCard className="skill-card" icon={<SiRedux />} title="Redux" />
				<SkillCard className="skill-card" icon={<SiZod />} title="Zod" />
				<SkillCard
					className="skill-card"
					icon={<SiReacthookform />}
					title="React Hook Form"
				/>
				<SkillCard
					className="skill-card"
					icon={<RiTailwindCssFill />}
					title="Tailwind CSS"
				/>
				<SkillCard
					className="skill-card"
					icon={<TbWashDryShade />}
					title="shadecn/ui"
				/>
				<SkillCard className="skill-card" icon={<SiGsap />} title="GSAP" />
				<SkillCard
					className="skill-card"
					icon={<RiSupabaseFill />}
					title="Supabase"
				/>
				<SkillCard
					className="skill-card"
					icon={<FaLaravel />}
					title="Laravel"
				/>
				<SkillCard className="skill-card" icon={<RiPhpLine />} title="PHP" />
				<SkillCard className="skill-card" icon={<SiMysql />} title="MySQL" />
				<SkillCard
					className="skill-card"
					icon={<BiLogoJquery />}
					title="jQuery"
				/>
			</section>
		</section>
	);
}

export default SkillsList;
