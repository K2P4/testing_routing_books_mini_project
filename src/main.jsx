/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import BookContextData from "./service/store/BookContextData.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BookContextData>
		<Router>
			<App />
		</Router>
	</BookContextData>
);
