"use client";

import Form from "next/form";
import React from "react";

const HeaderSearchBar = () => {
	// Redirect to search page with query: /search?query=

	return (
		<Form action={"/search"}>
			<div className="relative">
				<div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-gray-400">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="16"
						height="16"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						className="lucide lucide-search"
					>
						<circle cx="11" cy="11" r="8" />
						<path d="m21 21-4.3-4.3" />
					</svg>
				</div>
				<input
					type="text"
					name="query"
					id="query"
					placeholder="Search..."
					className="w-32 pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-gray-500 focus:border-transparent focus:outline-none"
				/>
			</div>
		</Form>
	);
};

export default HeaderSearchBar;
