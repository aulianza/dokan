import { MENUS } from "@/common/constant/menu";
import { cn } from "@/common/utils/cn";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ActionButton from "./ActionButton";

const Menu = () => {
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<>
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

			<button
				className="md:hidden text-[#022C22] text-2xl"
				onClick={() => setIsOpen(!isOpen)}
				aria-label="Toggle menu"
			>
				{isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
			</button>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						ref={menuRef}
						initial={{ x: "100%", opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: "100%", opacity: 0 }}
						transition={{ duration: 0.4, ease: "easeOut" }}
						className="fixed top-0 right-0 w-[75%] h-full bg-white shadow-lg flex flex-col p-6 space-y-6 md:hidden z-50"
					>
						{MENUS.map((menu) => (
							<Link
								key={menu.id}
								href={menu.path}
								passHref
								onClick={() => setIsOpen(false)}
								className={cn(
									"text-[#022C22] text-lg font-semibold",
									"hover:text-[#0719B3] transition-all duration-300",
									router.pathname === menu.path && "text-[#0719B3]"
								)}
							>
								{menu.name}
							</Link>
						))}

						<ActionButton />
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default Menu;
