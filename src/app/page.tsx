import { getCurrentSession } from "@/actions/auth";
import React from "react";

const HomePage = async () => {
	const { user } = await getCurrentSession();

	return (
		<div>
			<h1>Home Page</h1>
			<p>Welcome, {JSON.stringify(user)}</p>
		</div>
	);
};

export default HomePage;
