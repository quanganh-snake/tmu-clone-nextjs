import { getCurrentSession, loginUser, registerUser } from "@/actions/auth";
import FormSignUp from "@/components/auth/FormSignUp";
import { redirect } from "next/navigation";
import React from "react";

import zod from "zod";

const SignUpSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(6),
});

const SignUpPage = async () => {
	const { user } = await getCurrentSession();

	if (user) {
		return redirect("/");
	}

	const actionSignUp = async (prevState: any, formData: FormData) => {
		"use server";
		const paserdDataSignUp = SignUpSchema.safeParse(Object.fromEntries(formData));
		if (!paserdDataSignUp.success) {
			return { error: paserdDataSignUp.error, message: "Invalid form data" };
		}

		const { email, password } = paserdDataSignUp.data;
		const { user, error, message } = await registerUser(email, password);

		if (error) {
			return { message };
		} else if (user) {
			await loginUser(email, password);
			return redirect("/");
		}
	};

	return <FormSignUp actionSignUp={actionSignUp} />;
};

export default SignUpPage;
