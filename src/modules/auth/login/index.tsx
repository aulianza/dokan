import React from "react";
import { motion } from "framer-motion";
import AuthHeading from "./components/AuthHeading";
import LoginForm from "./components/LoginForm";
import SocialLogin from "@/common/components/ui/SocialLogin";

const pageVariants = {
	initial: { opacity: 0, y: 30 },
	animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
	exit: { opacity: 0, y: 30, transition: { duration: 0.3, ease: "easeIn" } },
};

const LoginModule = () => {
	return (
		<section
			className="md:py-40 flex items-center justify-center px-8 lg:px-0 py-12 bg-contain lg:bg-cover bg-no-repeat"
			style={{ backgroundImage: "url('/images/bg.svg')" }}
		>
			<motion.div
				variants={pageVariants}
				initial="initial"
				animate="animate"
				exit="exit"
				className="w-full max-w-md space-y-6"
			>
				<AuthHeading
					title="Sign In"
					subtitle="Access our services in one click"
				/>
				<LoginForm />
				<SocialLogin />
			</motion.div>
		</section>
	);
};

export default LoginModule;
