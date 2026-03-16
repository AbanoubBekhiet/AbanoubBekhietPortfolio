"use client";
function Badge({ text }) {
	return (
		<p className="text-sm font-small text-blue bg-blue-100 rounded-full px-3 py-1 w-fit text-center">
			{text}
		</p>
	);
}

export default Badge;
