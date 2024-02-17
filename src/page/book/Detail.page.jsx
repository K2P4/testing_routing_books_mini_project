/** @format */

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hook/useFetch";
import { useNavigate } from "react-router-dom";
import { GetBookRelease } from "../../service/bookRelease.service";

const DetailPage = () => {
	const { id } = useParams();
	const { data, loading, error } = useFetch(GetBookRelease, `release/${id}`);
	const nav = useNavigate();

	const handleBack = () => {
		nav(-1);
	};

	return (
		<div>
			{loading ? (
				<>Loading....</>
			) : (
				<div className="text-justify w-full h-screen ">
					<div
						className={`flex    items-start mt-12 gap-5 w-full   h-[420px] mb-1  overflow-hidden  `}>
						<img
							className=" w-[65%]   h-[420px] object-fill rounded-sm shadow-sm  "
							src={data.image}
							alt=""
						/>

						<div className="w-full  ">
							<div className="flex justify-between  items-center align-middle">
								<div className="text-start">
									<h3 className="text-xl font-medium ">{data.slug}</h3>
									<h2 className="text-lg text-gray-600 font-medium ">
										{data.author}
									</h2>
								</div>
								<button
									className="flex items-center active:scale-100  duration-150 transition-transform    font-medium align-middle bg-gray-800  px-3 py-1 text-white rounded-md "
									onClick={handleBack}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-5 h-5 me-1 ">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
										/>
									</svg>
									Back
								</button>
							</div>
							<p
								className={`font-medium 
							 float-start text-gray-400 tracking-wide leading-6 `}>
								{data.description.slice(
									0,
									Math.ceil(data.description.length) / 2
								)}
							</p>
						</div>
					</div>
					<p
						className={`font-medium 
							 float-start text-gray-400 tracking-wide leading-6 `}>
						{data.description.slice(
							Math.ceil(data.description.length) / 2,
							data.description.length
						)}
					</p>
				</div>
			)}
		</div>
	);
};

export default DetailPage;
