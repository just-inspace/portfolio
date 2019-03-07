import React, { Component } from "react";
import Loader from "./loader";
import Project from "./project";
import { useSpring, animated } from "react-spring";

/**
 * ProjectsContainer Stateful Class Component
 *
 *
 * @export ProjectsContainer class
 *  --state {loaded, projects[]}
 *  --componentDidMount -> ajax call for projects
 *  --CONDITIONAL RENDER -> Loader Component || map(projects => Project)
 * @returns JSX representation of the ProjectsContainer
 */
export default class ProjectsContainer extends Component {
	constructor() {
		state = { loaded: false, projects: [] };
	}

	//placeholder, please update
	render() {
		return loaded ? <Project /> : <Loader />;
	}
}
