import React from "react";
import { Link } from "react-router-dom";
const Pagination = ({ pages }) => (
	<>
		<ul className="pagination">
			{pages.map((page, index) => (
				<li className="page-item" key={index}>
					<Link to={page} className="page-link">
						{page}
					</Link>
				</li>
			))}
		</ul>
	</>
);
export default Pagination;
