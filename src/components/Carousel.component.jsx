/** @format */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/swiper/swiper-bundle.min.css";
import "../../node_modules/swiper/swiper.min.css";
import useFetch from "../hook/useFetch";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { GetBookRelease } from "../service/bookRelease.service";

const CarouselComponent = () => {
	const { data } = useFetch(GetBookRelease, "slideImage");

	console.log(data);
	return (
		<div className="   ">
			<Swiper
				className="  select-none "
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={18}
				slidesPerView={2}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log("slide change")}>
				{data ? (
					data?.map((item) => (
						<SwiperSlide modules={[EffectFade]} effect="fade" key={item.id}>
							{({ isActive }) => (
								<div>Current slide is {isActive ? "active" : "not active"}</div>
							)}
							<img
								className=" text-center rounded-sm  w-full h-[270px] mx-auto object-none "
								src={item.image}
								alt=""
							/>
						</SwiperSlide>
					))
				) : (
					<div
						role="status"
						className="flex items-center justify-center  h-60 max-w-full bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
						<svg
							className="w-full h-10 text-gray-200 dark:text-gray-600"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 20">
							<path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
							<path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
						</svg>
						<span className="sr-only">Loading...</span>
					</div>
				)}
			</Swiper>
		</div>
	);
};

export default CarouselComponent;
