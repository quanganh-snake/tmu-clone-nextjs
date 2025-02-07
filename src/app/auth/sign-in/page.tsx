import { getCurrentSession, loginUser, registerUser } from "@/actions/auth";
import FormSignIn from "@/components/auth/FormSignIn";
import { redirect } from "next/navigation";
import React from "react";

import zod from "zod";

const SignInSchema = zod.object({
	email: zod.string().email(),
	password: zod.string().min(6),
});

const SignInPage = async () => {
	const { user } = await getCurrentSession();

	if (user) {
		return redirect("/");
	}

	const actionSignIn = async (prevState: any, formData: FormData) => {
		"use server";
		const paserdDataSignUp = SignInSchema.safeParse(Object.fromEntries(formData));
		if (!paserdDataSignUp.success) {
			return { error: paserdDataSignUp.error, message: "Invalid form data" };
		}

		const { email, password } = paserdDataSignUp.data;
		const { user, error, message } = await loginUser(email, password);

		if (error) {
			return { message };
		} else if (user) {
			return redirect("/");
		}
	};

	return <FormSignIn actionSignIn={actionSignIn} />;
};

export default SignInPage;
