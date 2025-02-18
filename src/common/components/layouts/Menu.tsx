import { MENUS } from "@/common/constant/menu";
import { cn } from "@/common/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Menu = () => {
	const router = useRouter();

	return (
		<div className="gap-8 items-center hidden md:flex">
			{MENUS.map((menu) => (
				<Link
					key={menu.id}
					href={menu.path}
					passHref
					className={cn(
						"text-[#022C22] text-[16px] font-semibold",
						"hover:text-[#0719B3] transition-all duration-300",
						router.pathname === menu.path && "text-[#0719B3]"
					)}
				>
					{menu.name}
				</Link>
			))}
		</div>
	);
};

export default Menu;
