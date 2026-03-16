"use client";

function HeroHeadings() {
    return (
        <section
            className="w-full h-[25vh] p-8 flex items-center justify-center mb-5 sm:mb-0"
        >
            <h1 className="split-text flex flex-col items-center text-center">
                <span className="text-3xl font-extrabold text-black dark:text-white block">
                    Hi, I&apos;m Abanoub Bekhiet
                </span>
                <span className="text-3xl font-extrabold text-blue-600 block">
                    Software Engineer
                </span>
                <span className="text-3xl font-extrabold text-black dark:text-white block">
                    React, Next.js developer.
                </span>
            </h1>
        </section>
    );
}

export default HeroHeadings;