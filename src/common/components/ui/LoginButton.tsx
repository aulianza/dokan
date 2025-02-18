import React from "react";
import { cn } from "@/common/utils/cn";

type LoginButtonProps = {
	isLoading?: boolean;
};

const LoginButton = ({ isLoading }: LoginButtonProps) => {
	return (
		<button
			type="submit"
			disabled={isLoading}
			className={cn(
				"text-white shadow-[0_0_0_1px_#2E98A2,0_1px_2px_#257A82] rounded-[6px] text-base font-semibold w-full text-[18px] bg-[#040A50] relative before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/10 before:to-transparent h-[59px] bg-auto bg-no-repeat hover:opacity-90",
				isLoading && "opacity-50 cursor-not-allowed"
			)}
			style={{
				backgroundImage: "url('/images/btn-vector.svg')",
				backgroundPosition: "40% 51%",
			}}
		>
			{isLoading ? "Loading..." : "Login"}
		</button>
	);
};

export default LoginButton;
