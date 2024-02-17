/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";

const BookPage = ({
	item: { id, title, slug, author, description, image },
}) => {
	const nav = useNavigate();

	const handleDetail = () => {
		nav(`/detail/${id}`);
	};
	return (
		<div className=" ">
			<div
                key={id}
				onClick={handleDetail}
				className=" flex flex-col align-middle items-center  w-[200px] h-[250px] ">
				<img
					className="  w-[140px] h-[170px] object-fill  "
					src={image}
					alt=""
				/>

				<p className="text-gray-500 m-1 font-medium text-sm ">{author}</p>

				<h3 className="font-san  text-md text-center  ">{title}</h3>
			</div>
		</div>
	);
};

export default BookPage;
