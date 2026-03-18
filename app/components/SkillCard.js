function SkillCard({ icon, title }) {
	return (
		<section className="skill-card bg-white dark:bg-black-light rounded-lg p-4 flex flex-col items-start gap-4">
			<div className="p-2 rounded-xl bg-gray-light text-blue text-2xl">
				{icon}
			</div>
			<h3 className="text-xl text-black dark:text-white">{title}</h3>
			<div className="bg-blue w-full h-2 rounded-full"> </div>
		</section>
	);
}

export default SkillCard;
