import { useForm } from "react-hook-form";
import { FaLocationArrow, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function ContactForm() {
	useGSAP(() => {
		gsap.from(".input", {
			x: 100,
			opacity: 0,
			duration: 1,
			stagger: 0.2, 
			scrollTrigger: {
				trigger: ".input",
				start: "top 90%", 
				end: "top 60%",
				scrub: 1,
			},
		});
	});
	const formRef = useRef();
	const [isSending, setIsSending] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = (data) => {
		setIsSending(true);

		emailjs
			.sendForm(
				"service_ahasevf",
				"template_7bhmyw2",
				formRef.current,
				"L7uL4m6mGcsqSHO4F",
			)
			.then(
				() => {
					reset();
					setIsSending(false);
					toast.success("email sent successfully");
				},
				(error) => {
					console.error("Error:", error.text);
					setIsSending(false);
					toast.error("email does not sent");
				},
			);
	};

	return (
		<section className="flex flex-col w-full items-center gap-8 bg-gray-light dark:bg-black p-8">
			<header className="text-center">
				<h2 className="text-black dark:text-white text-3xl font-bold">
					Let&apos;s Connect
				</h2>
				<p className="text-gray-dark dark:text-gray-light mt-2">
					I&apos;m currently open to new opportunities and collaborations. Drop
					me a line!
				</p>
			</header>

			<form
				ref={formRef}
				onSubmit={handleSubmit(onSubmit)}
				className="flex flex-col items-center gap-6 w-full max-w-md"
			>
				<div className="w-full input">
					<label
						htmlFor="user_email"
						className="block mb-2 text-sm font-medium text-gray-dark dark:text-gray-light"
					>
						Email
					</label>
					<input
						id="user_email"
						name="user_email"
						type="email"
						className="w-full px-4 py-2 bg-white dark:bg-black dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
						placeholder="your@email.com"
						{...register("email", {
							required: "Email is required",
							pattern: {
								value: /\S+@\S+\.\S+/,
								message: "Entered value does not match email format",
							},
						})}
					/>
					{errors.email && (
						<span className="text-red-500 text-xs mt-1">
							{errors.email.message}
						</span>
					)}
				</div>

				<div className="w-full input">
					<label
						htmlFor="user_name"
						className="block mb-2 text-sm font-medium text-gray-dark dark:text-gray-light"
					>
						Name
					</label>
					<input
						id="user_name"
						name="user_name"
						className="w-full px-4 py-2 bg-white dark:bg-black dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
						placeholder="Your name"
						{...register("name", { required: "Name is required" })}
					/>
					{errors.name && (
						<span className="text-red-500 text-xs mt-1">
							{errors.name.message}
						</span>
					)}
				</div>

				<div className="w-full input">
					<label
						htmlFor="message"
						className="block mb-2 text-sm font-medium text-gray-dark dark:text-gray-light"
					>
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						className="w-full px-4 py-2 bg-white dark:bg-black dark:text-white rounded-xl border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
						placeholder="Your message"
						{...register("message", { required: "Message is required" })}
					/>
					{errors.message && (
						<span className="text-red-500 text-xs mt-1">
							{errors.message.message}
						</span>
					)}
				</div>

				<button
					type="submit"
					disabled={isSending}
					className={`flex items-center justify-center gap-4 px-8 py-3 w-full sm:w-auto bg-blue-500 text-white rounded-xl font-semibold transition-all hover:bg-blue-600 active:scale-95 ${isSending ? "opacity-70 cursor-not-allowed" : ""}`}
				>
					{isSending ? "Sending..." : "Send Message"}
					{!isSending && <FaLocationArrow />}
				</button>
			</form>

			<section className="flex flex-col items-center gap-4 mt-4">
				<h3 className="text-blue-500 font-bold tracking-widest text-sm">
					OR FIND ME ON
				</h3>
				<div className="flex items-center gap-6">
					<a
						href="https://www.linkedin.com/in/abanoub-bekhiet-b3ba86251"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-dark dark:text-gray-light hover:text-blue-500 transition-colors"
					>
						<FaLinkedin size={35} />
					</a>
					<a
						href="https://github.com/AbanoubBekhiet"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-dark dark:text-gray-light hover:text-black dark:hover:text-white transition-colors"
					>
						<FaGithub size={35} />
					</a>
					<a
						href="https://wa.me/qr/VO37L3BQF4DKO1"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-dark dark:text-gray-light hover:text-green-500 transition-colors"
					>
						<FaWhatsapp size={35} />
					</a>
				</div>
			</section>
		</section>
	);
}

export default ContactForm;
