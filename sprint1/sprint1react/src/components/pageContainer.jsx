import React, { Component } from "react";
import { useTransition, animated } from "react-spring";
import { Switch, Route } from "react-router-dom";

import { useRouter } from "./useRouter";

import HomePage from "./homePage";
import ProjectsPage from "./projectsPage";
import ResumePage from "./resumePage";

/**
 * PageContainer Stateful Class Component
 *  # This Container is responsible for managing the Switch and transition animations between pages
 *
 * @export PageContainer function
 * @returns JSX representation of the PageContainer
 */
export default class PageContainer extends Component {
	render() {
		return <div className="pageContainer" />;
	}
}
