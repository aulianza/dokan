"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie";
import InputField from "@/common/components/form/InputField";
import PasswordInput from "@/common/components/form/PasswordInput";
import LoginButton from "@/common/components/ui/LoginButton";

const loginSchema = z.object({
	email: z.string().email("Invalid email").min(1, "Email is required"),
	password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormInputs = z.infer<typeof loginSchema>;

const LoginForm = () => {
	const router = useRouter();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginFormInputs>({
		resolver: zodResolver(loginSchema),
	});

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const onSubmit = (data: LoginFormInputs) => {
		setLoading(true);
		setTimeout(() => {
			Cookies.set("token", "dummy_token_value", { expires: 7 });
			router.push("/");
		}, 1500);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="space-y-12">
			<div className="space-y-6">
				<InputField
					label="Email"
					type="email"
					placeholder="Enter your email"
					{...register("email")}
					error={errors.email?.message}
				/>
				<PasswordInput
					label="Password"
					placeholder="Enter your password"
					{...register("password")}
					error={errors.password?.message}
				/>
			</div>

			<LoginButton isLoading={loading} />
		</form>
	);
};

export default LoginForm;
