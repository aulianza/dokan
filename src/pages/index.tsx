import { requireAuth } from "@/middleware/auth";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import React from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const HomePage: NextPage = () => {
	const router = useRouter();

	const handleLogout = () => {
		Cookies.remove("token");
		router.push("/auth/login");
	};

	return (
		<div>
			<NextSeo title="Home | Dokat It LLC" />
			<div className="h-[calc(100vh-400px)] w-full max-w-md mx-auto flex flex-col items-center justify-center space-y-6">
				<h2 className="text-xl font-medium">Welcome!</h2>
				<button
					onClick={handleLogout}
					className="px-6 py-3 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition"
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
	return requireAuth(context, async () => {
		return {
			props: {},
		};
	});
};
