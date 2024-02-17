/** @format */

import React from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardPage = () => {
	return (
		<div className="grid grid-cols-5 ">
			<div className="">
				<ul>
					<Link to="/dashboard/inventory">
						<li>Inventory</li>
					</Link>

					<Link to="/dashboard/blog">
						<li>Blog</li>
					</Link>
				</ul>
			</div>

			<div className="  ">
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardPage;
