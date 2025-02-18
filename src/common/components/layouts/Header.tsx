import React from "react";
import Menu from "./Menu";
import Logo from "./Logo";
import ActionButton from "./ActionButton";

const Header = () => {
	return (
		<header className="bg-white border-b border-b-[#D9DEDD]">
			<div className="flex gap-5 items-center h-[96px] justify-between max-w-7xl mx-auto px-6 lg:px-0">
				<Logo />
				<Menu />
				<ActionButton />
			</div>
		</header>
	);
};

export default Header;
