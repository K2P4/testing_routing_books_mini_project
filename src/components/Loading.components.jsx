/** @format */

import React from "react";

const LoadingComponents = () => {
	const loopingDta = Array.from({ length: 5 }, (_, index) => index);
	return (
		<div>
			<div className=" flex  justify-center  mt-10 ">
				<div
					role="status"
					className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center">
					<div className="flex items-center justify-center  h-64 bg-gray-300 rounded w-[400px] dark:bg-gray-700">
						<svg
							className="w-10 h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 20 18">
							<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
						</svg>
					</div>
					<div className=" w-[600px] ">
						<div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
						<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[180px] mb-2.5"></div>
						<div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[170px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
						<div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
						<div className="h-9 mt-10 bg-gray-200 dark:bg-gray-700 max-w-[110px]"></div>
					</div>
					<span className="sr-only">Loading...</span>
				</div>
			</div>

			<div className=" flex gap-10    mt-5 items-center align-middle  ">
				{loopingDta.map((index) => (
					<div key={index} className=" ">
						<div
							role="status"
							className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse flex-col md:flex md:items-center">
							<div className="flex flex-col  items-center justify-center h-40 bg-gray-300 rounded w-[180px] dark:bg-gray-700">
								<svg
									className="w-10 h-10 text-gray-200 dark:text-gray-600"
									aria-hidden="true"
									xmlns="http://www.w3.org/2000/svg"
									fill="currentColor"
									viewBox="0 0 20 18">
									<path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
								</svg>
							</div>

							<div className="w-[150px]  text-center ">
								<div className="h-2.5 mt-1 bg-gray-200 rounded-full dark:bg-gray-700  text-center  w-32 mb-1"></div>
								<div className="h-2  bg-gray-200 rounded-full dark:bg-gray-700  text-center w-40 mb-4"></div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default LoadingComponents;
