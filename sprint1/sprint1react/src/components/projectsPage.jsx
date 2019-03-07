import React from "react";
import ProjectsContainer from "./projectsContainer";

/**
 * ProjectsPage Stateless Functional Component
 *
 *
 * @export ProjectsPage function
 * @returns JSX representation of the Projects Page
 */
export default function ProjectsPage() {
	return (
		<div className="page projectGrid">
			<ProjectsContainer />
		</div>
	);
}
