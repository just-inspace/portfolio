import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
	const [toggle, setToggle] = useState(false);
	return (
		<div id="sideNav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/resume">Resume</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<button id="sideNavControl" onClick={() => setToggle(!toggle)}>test</button>
			<span>Value is: {"" + toggle}</span>
		</div>
	);
}
