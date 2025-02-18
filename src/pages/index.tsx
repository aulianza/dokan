import LoginModule from "@/modules/auth/login";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";

const LoginPage: NextPage = () => {
	return (
		<>
			<NextSeo title="Login | Dokat It LLC" />
			<LoginModule />
		</>
	);
};

export default LoginPage;
