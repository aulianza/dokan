import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";

const ActionButton = () => {
	return (
		<button className="cursor-pointer hover:bg-[#0719B3] hover:text-white  transition-all duration-300 rounded-full px-5 py-3 border border-[#0719B3] font-medium text-[#1D1F1E] flex items-center gap-2">
			Dashboard <IoArrowForwardOutline size={20} />
		</button>
	);
};

export default ActionButton;
