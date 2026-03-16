"use client";
import Image from "next/image";
import me from "../../public/me.jpg";

function HeroImage() {
	return (
		<section className="p-8 overflow-hidden">
			<section className="relative mt-5 shadow-xl after:content-[''] after:absolute after:inset-0 after:w-full after:h-full after:-z-10 after:bg-black/20 dark:after:bg-white after:skew-5 before:rounded-2xl before:content-[''] before:absolute before:inset-0  before:w-full before:h-full before:-z-10 before:bg-blue/50 before:-skew-5 after:rounded-2xl  hover:before:-skew-7 hover:after:skew-7 before:animate-pulse after:animate-pulse before:transition-all before:duration-300 after:transition-all after:duration-300">
				<Image
					className="rounded-2xl hero-image"
					src={me}
					alt="Profile picture"
					width={300}
					height={300}
				/>
				<div className=" layout rounded-2xl w-full bg-blue h-full absolute bottom-0"></div>
			</section>
		</section>
	);
}

export default HeroImage;
