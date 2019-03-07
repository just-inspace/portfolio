import React from "react";
import { useSpring, animated } from "react-spring";

/**
 * SidebarLinks Stateless Functional Component
 *
 *
 * @export SidebarLinks function
 *  --props {handleMenuToggle, toggle}
 * @returns JSX representation of the SidebarLinks
 */
export default function sidebarButton(props) {
	return <button onClick={props.handleMenuToggle} />;
}
