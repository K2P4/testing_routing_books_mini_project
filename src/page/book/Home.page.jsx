/** @format */

import React from "react";
import useFetch from "../../hook/useFetch";
import { GetBookRelease } from "../../service/bookRelease.service.js";
import BookPage from "./Book.page";
import LoadingComponents from "../../components/Loading.components.jsx";
import CarouselComponent from "../../components/Carousel.component.jsx";

const HomePage = () => {
	const { data, error, loading } = useFetch(GetBookRelease, "release");

	return (
		<div>
			{loading ? (
				<LoadingComponents />
			) : (
				<>
					{data ? (
						<div className=" ">
							<div className=" w-full   my-4  mx-auto   ">
								<CarouselComponent />
							</div>

							<div className=" mt-auto  flex justify-center  items-center align-middle ">
								<div>
									<h1 className="text-3xl text-center my-3 tracking-wide font-san">
										New Release Books
									</h1>
								</div>
							</div>

							<div className="flex animate__animated  duration-200  transition-transform animate__fadeIn justify-center   overflow-hidden   w-full flex-row gap-5">
								{data.map((item) => (
									<BookPage key={item.id} item={item} />
								))}
							</div>
						</div>
					) : (
						<>{error}</>
					)}
				</>
			)}
		</div>
	);
};

{
	/* <div className="animate__animated  duration-200  transition-transform animate__fadeIn bg-pink-50  bg-transparent flex items-center justify-center space-x-12 mt-5  rounded-md h-[320px] ">
	<img
		src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7uz0DNYz9a05dFiBvgvNYJ4GmV6cbjxUWUSWJrMcxqyAOlp5v"
		alt=""
		className=" object-fill  rounded-sm w-[300px] h-[300px] "
	/>
	"
	<div className=" w-[450px] text-justify">
		<h4 className="text-gray-400 text-sm font-medium mb-2 mt-1 tracking-wide ">
			{" "}
			F. Scott Fitzgerald
		</h4>
		<h5 className=" text-3xl font-san ">The Great Gatsby</h5>
		<h5 className="mb-2 text-3xl font-san ">Limited Edition</h5>
		<p className="text-md font-medium  text-gray-400 tracking-widest leading-6 ">
			F. Scott Fitzgerald's 1925 masterpiece, The Great Gatsby, tells the story
			of the ill-fated love between Jay Gatsby and Daisy Buchanan. But this is
			very much a love story of its time If you know more than click below
		</p>

		<button className="bg-red-800 mt-6 hover:bg-red-700  px-6 active:scale-90 py-1 tracking-widest  text-white font-medium  ">
			Read More
		</button>
	</div>
</div>; */
}

export default HomePage;
