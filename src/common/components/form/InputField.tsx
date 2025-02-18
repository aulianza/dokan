import React from "react";
import { cn } from "@/common/utils/cn";

type InputFieldProps = {
	label: string;
	type: string;
	placeholder: string;
	error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
	({ label, type, placeholder, error, ...props }, ref) => {
		return (
			<div className="space-y-2">
				<label className="block text-gray-700 pb-2">{label}</label>
				<input
					type={type}
					placeholder={placeholder}
					ref={ref}
					className={cn(
						"w-full px-4 py-3.5 border rounded-[10px] focus:outline-none focus:ring-1 focus:ring-[#040A50]",
						error ? "border-red-500" : "border-[#EFEFEF]"
					)}
					{...props}
				/>
				{error && <p className="text-red-500 text-sm">{error}</p>}
			</div>
		);
	}
);

InputField.displayName = "InputField";

export default InputField;
