import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { cn } from "@/common/utils/cn";

type PasswordInputProps = {
	label: string;
	placeholder: string;
	error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const PasswordInput = React.forwardRef<HTMLInputElement, PasswordInputProps>(
	({ label, placeholder, error, ...props }, ref) => {
		const [showPassword, setShowPassword] = useState(false);

		return (
			<div className="space-y-2">
				<label className="block text-gray-700 pb-2">{label}</label>
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						placeholder={placeholder}
						ref={ref}
						className={cn(
							"w-full px-4 py-3.5 border rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#040A50]",
							error ? "border-red-500" : "border-[#EFEFEF]"
						)}
						{...props}
					/>
					<button
						type="button"
						className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#878787]"
						onClick={() => setShowPassword(!showPassword)}
					>
						{showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
					</button>
				</div>
				{error && <p className="text-red-500 text-sm">{error}</p>}
			</div>
		);
	}
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
