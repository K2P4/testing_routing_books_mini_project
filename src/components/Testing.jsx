/** @format */

import React, { useState } from "react";

const Testing = ({ images }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const goToPreviousSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === 0 ? images.length - 1 : prevIndex - 1
		);
	};

	const goToNextSlide = () => {
		setActiveIndex((prevIndex) =>
			prevIndex === images.length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative overflow-hidden">
			<div className="">
				{images.map((image, index) => (
					<div
						key={index}
						className={`w-full h-full transition-transform transform ${
							index === activeIndex ? "" : "translate-x-full"
						}`}>
						<img
							src={image}
							alt={`Slide ${index + 1}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			<button
				className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
				onClick={goToPreviousSlide}>
				&lt;
			</button>
			<button
				className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black rounded-full p-2"
				onClick={goToNextSlide}>
				&gt;
			</button>
		</div>
	);
};

export default Testing;
