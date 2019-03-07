import React from "react";

/**
 * Project Stateless Functional Component
 *
 *
 * @export Project function
 *  --props {projectName, sourceLink, siteLink, imageLink, handleSiteClick, handleSourceClick}
 * @returns JSX representation of a single Project
 */
export default function Project(props) {
	return (
		<React.Fragment>
			<h3 className="projectName">{props.projectName}</h3>
			<div className="img" />
			<button onClick={props.handleSiteClick} value={props.siteLink}>
				View Site
			</button>
			<button onClick={props.handleSourceClick} value={props.sourceLink}>
				GitHub
			</button>
		</React.Fragment>
	);
}
