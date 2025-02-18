import React from "react";

type AuthHeadingProps = {
	title: string;
	subtitle: string;
};

const AuthHeading = ({ title, subtitle }: AuthHeadingProps) => {
	return (
		<div className="space-y-6 md:space-y-14">
			<h2 className="text-4xl md:text-[62px] font-semibold text-center text-[#1D1F1E]">
				{title}
			</h2>
			<p className="text-[#646A69] text-[18px] text-center">{subtitle}</p>
		</div>
	);
};

export default AuthHeading;
