import React from "react";
import { NavLink } from "react-router-dom";

export default function SideNav() {
	return (
		<div id="sideNav">
			<NavLink to="/">Home</NavLink>
			<NavLink to="/projects">Projects</NavLink>
			<NavLink to="/resume">Resume</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<div id="sideNavControl" />
		</div>
	);
}
