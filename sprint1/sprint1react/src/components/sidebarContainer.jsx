import React, { Component } from "react";
import { useSpring, animated } from "react-spring";

import SidebarLinks from "./sidebarLinks";
import SidebarButton from "./sidebarButton";

/**
 * SidebarContainer Stateful Class Component
 *
 *
 * @export SidebarContainer function
 *  --state {toggleSidebar}
 *
 * @returns JSX representation of the SidebarContainer
 */
export default class SidebarContainer extends Component {
	constructor() {
		state = { toggleSidebar: false };
	}

	handleMenuToggle = () => {
		this.setState({ toggleSidebar: !toggleSidebar });
	};

	render() {
		return (
			<div className="sidebar">
				<SidebarLinks
					handleMenuToggle={handleMenuToggle}
					toggle={this.state.toggleSidebar}
				/>
				<SidebarButton
					handleMenuToggle={handleMenuToggle}
					toggle={this.state.toggleSidebar}
				/>
			</div>
		);
	}
}
