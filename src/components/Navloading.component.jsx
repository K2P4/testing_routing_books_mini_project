/** @format */

import React from "react";

const NavloadingComponent = () => {
	return (
		<div className="flex items-center justify-between">
			<div
				role="status"
				className="max-w-sm flex gap-10 items-center animate-pulse">
				<div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-48 mb-4"></div>
				<div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-40 mb-4"></div>
				<div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-40 mb-4"></div>
				<div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-40  mb-4"></div>

				<span className="sr-only">Loading...</span>
			</div>

			<div
				role="status"
				className="max-w-sm flex gap-5 items-center animate-pulse">
				<div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 w-28 mb-4"></div>
				<div className="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-6  mb-4"></div>

				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
};

export default NavloadingComponent;
