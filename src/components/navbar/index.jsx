import React from "react";
import { Link } from "react-router-dom";
  
export default function Navbar() {
	return <header>
			<nav className="navigation">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/favourites">Favourites</Link></li>
				</ul>
			</nav>
		</header>
}