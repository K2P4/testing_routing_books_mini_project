/** @format */

import React from "react";
import { Link, NavLink } from "react-router-dom";
import useFetch from "../hook/useFetch";
import { GetBookRelease } from "../service/bookRelease.service";
import NavloadingComponent from "./Navloading.component";

const NavComponent = () => {
	const { loading } = useFetch(GetBookRelease, "release");
	return (
		<>
			{loading ? (
				<NavloadingComponent />
			) : (
				<div className="flex justify-between ">
					<section className="flex items-center  align-middle  gap-5">
						<div className="flex  ms-3 items-center gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-7 h-7">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
								/>
							</svg>

							<Link to="/">
								<h3 className="text-md  font-bold  ">LoTaYa BookShop</h3>
							</Link>
						</div>

						<div className="flex items-center align-middle ">
							<NavLink to="/">
								<h3 className="text-md duration-200 transition-transform  font-bold active:text-white active:bg-red-700  active:text-md active:py-1   px-5   ">
									HOME
								</h3>
							</NavLink>
							<NavLink to="/dashboard">
								<h3 className="text-md duration-200 transition-transform  font-bold active:text-white active:bg-red-700  active:text-md active:py-1   px-5   ">
									SHOP
								</h3>
							</NavLink>
							<NavLink to="/about">
								<h3 className="text-md duration-200 transition-transform  font-bold active:text-white active:bg-red-700  active:text-md active:py-1   px-5   ">
									About Us
								</h3>
							</NavLink>
							<NavLink to="/contact">
								<h3 className="text-md duration-200 transition-transform  font-bold active:text-white active:bg-red-700 active:text-md active:py-1   px-5   ">
									Contact
								</h3>
							</NavLink>
						</div>
					</section>

					<section className="flex items-center gap-2">
						<div className=" relative ">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
								/>
							</svg>

							<p className="bg-red-500 absolute -top-1 -end-1 rounded-full h-4 w-4 text-white font-san text-center text-xs ">
								0
							</p>
						</div>
						<div className="flex items-center gap-1">
							<p className="text-sm  font-heading "> $0.00 ၊ </p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 ms-1 rotate-90 h-5">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
								/>
							</svg>
						</div>
					</section>
				</div>
			)}
		</>
	);
};

export default NavComponent;
