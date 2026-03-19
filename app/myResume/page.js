"use client";

function Page() {
    return (
        <div className="h-screen w-full">
            <object
                data="/cv.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                className="border-none"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <p>Unable to display PDF file.</p>
                    <a href="/cv.pdf" className="text-blue-500 underline">Download CV</a>
                </div>
            </object>
        </div>
    );
}

export default Page;