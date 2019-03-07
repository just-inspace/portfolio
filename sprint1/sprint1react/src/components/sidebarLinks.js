import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

/**
 * SidebarLinks Stateless Functional Component
 *
 *
 * @export SidebarLinks function
 *  --props {handleMenuToggle, toggle}
 * @returns JSX representation of the SidebarLinks
 */
export default function SidebarLinks(props) {
	return (
		<React.Fragment>
			<p>
				<Link to="/" onClick={props.handleMenuToggle}>
					Home
				</Link>
			</p>
			<p>
				<Link to="/projects" onClick={props.handleMenuToggle}>
					Projects
				</Link>
			</p>
			<p>
				<Link to="/resume" onClick={props.handleMenuToggle}>
					Resume
				</Link>
			</p>
		</React.Fragment>
	);
}
