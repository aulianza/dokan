import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			<Header />
			<>{children}</>
			<Footer />
		</main>
	);
};

export default Layout;
