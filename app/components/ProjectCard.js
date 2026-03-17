import Image from "next/image";
import Badge from "../ui/Badge";
import { FaGithub, FaExternalLinkAlt, FaPlayCircle } from "react-icons/fa";

function ProjectCard({
	image,
	tools,
	title = "Project Title",
	description = "Description of your awesome work.",
	website,
	github,
	video,
}) {
	return (
		<div className="project-card w-[85vw] md:w-[550px] flex-shrink-0 flex flex-col gap-5 ">
			<div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-lg bg-zinc-100 dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800">
				<Image
					src={image}
					alt={title}
					fill
					priority
					className="object-cover transition-transform duration-700 hover:scale-105"
					sizes="(max-width: 768px) 85vw, 550px"
				/>
			</div>

			<div className="flex flex-col gap-4 px-2">
				<div className="flex flex-col gap-2">
					<div className="flex items-center justify-between">
						<h3 className="text-2xl font-bold text-blue">{title}</h3>

						<div className="flex items-center gap-4 text-xl text-gray-600 dark:text-gray-400">
							{github && (
								<a
									href={github}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-blue transition-colors"
								>
									<FaGithub title="View Source" />
								</a>
							)}
							{video && (
								<a
									href={video}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-red-500 transition-colors"
								>
									<FaPlayCircle title="Watch Demo" />
								</a>
							)}
							{website && (
								<a
									href={website}
									target="_blank"
									rel="noopener noreferrer"
									className="hover:text-blue transition-colors"
								>
									<FaExternalLinkAlt className="text-lg" title="Live Site" />
								</a>
							)}
						</div>
					</div>

					<p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed line-clamp-2">
						{description}
					</p>
				</div>

				{tools && (
					<div className="flex flex-wrap gap-2 ">
						{tools.map((tool, index) => (
							<Badge key={index} text={tool} />
						))}
					</div>
				)}
			</div>
		</div>
	);
}

export default ProjectCard;
