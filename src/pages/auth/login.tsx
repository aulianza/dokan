import { redirectIfAuthenticated } from "@/middleware/auth";
import LoginModule from "@/modules/auth/login";
import { GetServerSideProps, NextPage } from "next";
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const redirect = redirectIfAuthenticated(ctx);
	if (redirect) return redirect;

	return {
		props: {},
	};
};
