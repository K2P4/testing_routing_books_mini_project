/** @format */

import React, { useState, useEffect } from "react";

const useFetch = (setFun, arg) => {
	const [data, setData] = useState({
		data: null,
		loading: true,
		error: null,
	});

	useEffect(() => {
		(async () => {
			try {
				const data = await setFun(arg);
				setTimeout(() => {
					setData((pre) => {
						return {
							error: null,
							loading: false,
							data: data,
						};
					});
				}, 3000);
			} catch (e) {
				setData((pre) => {
					return {
						error: e.message,
						loading: false,
						data: null,
					};
				});
			}
		})();
	}, []);

	return data;
};

export default useFetch;
