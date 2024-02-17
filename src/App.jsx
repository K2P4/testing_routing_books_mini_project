/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import { NavComponent } from "./components";
import {
	HomePage,
	ContactPage,
	AboutPage,
	ErrorPage,
	DetailPage,
	DashboardPage,
	InventoryPage,
	BlogPage,
} from "./page";

const App = () => {
	return (
		<div className="main">
			<NavComponent />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/about" element={<AboutPage />} />
				<Route path="/detail/:id" element={<DetailPage />} />

				<Route path="*" element={<ErrorPage />} />

				<Route path="/dashboard" element={<DashboardPage />}>
					<Route path="inventory" element={<InventoryPage />} />
					<Route path="blog" element={<BlogPage />} />
				</Route>
			</Routes>
		</div>
	);
};

export default App;
