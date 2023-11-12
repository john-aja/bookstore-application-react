import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to="/books">Books</Link>
				</li>
				<li>
					<Link to="/">React Library</Link>
				</li>
				<li>
					<Link to="/authors">Authors</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
