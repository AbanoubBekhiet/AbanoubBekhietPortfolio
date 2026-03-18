function ExperienceCard({ title, date, description }) {
	return (
		<section className="p-12 dark:bg-dark   relative before:absolute before:content-[''] before:w-4 before:h-4 before:rounded-full before:bg-blue  before:border-2 before:border-blue before:top-3 before:left-0 before:z-10 experience-card">
			<p className="text-blue text-md absolute top-3 left-7">{date}</p>
			<h3 className="text-2xl font-bold dark:text-white">{title}</h3>
			<p className="text-gray-dark dark:text-gray-light text-md">
				{description}
			</p>
			<div className="w-0.5 dark:w-[1px] h-full bg-gray-light dark:bg-gray-300 absolute top-7 left-2 rounded-2xl "></div>
		</section>
	);
}

export default ExperienceCard;
