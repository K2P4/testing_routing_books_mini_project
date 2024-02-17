/** @format */

import React, { createContext } from "react";
import useFetch from "../../hook/useFetch";
import { GetBookData } from "../book.service";

export const BookContext = createContext({
	data: null,
	loading: false,
	error: null,
});

const BookContextData = ({ children }) => {
	const { data, loading, error } = useFetch(GetBookData, "book");

	return (
		<div>
			<BookContext.Provider value={{ data, loading, error }}>
				{children}
			</BookContext.Provider>
		</div>
	);
};

export default BookContextData;
