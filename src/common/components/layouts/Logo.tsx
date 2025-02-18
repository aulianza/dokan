import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<Link href="/">
			<Image src="/images/logo.svg" alt="logo" width={94} height={32} />
		</Link>
	);
};

export default Logo;
