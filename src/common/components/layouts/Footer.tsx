import React from "react";
import Link from "next/link";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { CONTACT_INFO, FOOTER_LINKS } from "@/common/constant/footer";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-[#1A1B1E] text-white py-20">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 space-y-40">
				<div className="flex flex-col md:flex-row justify-between items-start space-y-12 md:space-y-0">
					<div className="space-y-6">
						<div className="flex flex-col items-start gap-3">
							<Image src="/images/icon.svg" alt="Logo" width={32} height={32} />
							<span className="text-[14px] font-normal text-[#606060]">
								Dokan Front End Test
							</span>
						</div>
						<div className="flex space-x-4 text-[#787C91]">
							<FaLinkedin className="cursor-pointer hover:text-white" />
							<FaInstagram className="cursor-pointer hover:text-white" />
							<FaFacebook className="cursor-pointer hover:text-white" />
							<FaXTwitter className="cursor-pointer hover:text-white" />
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{FOOTER_LINKS.map((column, index) => (
							<div key={index} className="space-y-3">
								{column.map((link) => (
									<Link
										key={link.id}
										href={link.path}
										className="text-white hover:text-gray-400 block cursor-pointer"
									>
										{link.name}
									</Link>
								))}
							</div>
						))}
						<div className="space-y-5">
							<h4 className="text-lg font-semibold">Our Contact</h4>
							<div className="space-y-3">
								<p className="flex gap-3 items-center text-[#C2C2C2]">
									<Image
										src="/images/ic-email.svg"
										alt="email"
										width={16}
										height={16}
									/>
									{CONTACT_INFO.email}
								</p>
								<p className="flex gap-3 items-center text-[#C2C2C2]">
									<Image
										src="/images/ic-phone.svg"
										alt="phone"
										width={16}
										height={16}
									/>
									{CONTACT_INFO.phone}
								</p>
								<p className="flex gap-3 items-center text-[#C2C2C2]">
									<Image
										src="/images/ic-map.svg"
										alt="location"
										width={16}
										height={16}
									/>
									{CONTACT_INFO.location}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col md:flex-row justify-between text-[#606060] text-sm gap-2">
					<p>© 2025 Dokan Inc. All rights reserved.</p>
					<div className="flex space-x-6">
						<Link href="/privacy-policy" className="hover:text-white">
							Privacy policy
						</Link>
						<Link href="/gdpr" className="hover:text-white">
							GDPR
						</Link>
						<Link href="/terms-of-service" className="hover:text-white">
							Terms of service
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
