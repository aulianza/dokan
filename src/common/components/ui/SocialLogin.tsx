import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const SocialLogin = () => {
	return (
		<div className="space-y-6">
			<div className="flex items-center my-4">
				<div className="flex-grow border-t border-[#EFEFEF]"></div>
				<span className="px-4 text-gray-500">or</span>
				<div className="flex-grow border-t border-[#EFEFEF]"></div>
			</div>

			<button
				type="button"
				className="text-[18px] text-[#242424] font-medium w-full flex items-center justify-center gap-2 border-[1.5px] border-[#EFEFEF] h-[59px] rounded-[8px] hover:bg-gray-50"
			>
				<FcGoogle className="text-xl" />
				<span>Continue with Google</span>
			</button>

			<p className="text-center text-gray-600 mt-4">
				Didn’t have an account?{" "}
				<Link href="/register" className="text-black font-semibold underline">
					Register
				</Link>
			</p>
		</div>
	);
};

export default SocialLogin;
