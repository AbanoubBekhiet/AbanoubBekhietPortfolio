import { FaEnvelopeOpen } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function ContactAnimatedBall() {
	const container = useRef();

	useGSAP(
		() => {
			gsap.to(".ball", {
				y: -60,
				ease: "power1.inOut",
				duration: 2,
				repeat: -1,
				yoyo: true,
			});
		},
		{ scope: container },
	);

	return (
		<section
			ref={container}
			className="h-[400px] w-full bg-gray-100 dark:bg-black p-8 flex items-center justify-center shadow-2xl shadow-[inset_0_0_500px_rgba(59,130,246,0.2)] "
		>
			<div className="ball h-52 aspect-square border-blue-300 border bg-white flex items-center justify-center rounded-full z-10 relative">
				<div className="bg-blue-400 h-40 aspect-square flex items-center justify-center rounded-full p-4 shadow-2xl shadow-blue-300 transition-all duration-300 hover:scale-110 animate-pulse">
					<FaEnvelopeOpen size={50} className="text-blue-100" />
				</div>
				<div className="absolute top-10 left-35 flex items-center gap-2 bg-white dark:bg-black px-4 py-2 rounded-lg shadow-lg">
					<CiLocationOn size={40} className="text-blue" />
					<p className="text-sm text-black dark:text-white ">
						Alexandria ,Egypt
					</p>
				</div>
			</div>
		</section>
	);
}

export default ContactAnimatedBall;
