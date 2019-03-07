import React from "react";

/**
 * Loader Stateless Functional Component
 *
 *
 * @export Loader function
 * @returns JSX representation of a loader
 */
export default function Loader() {
	return (
		<React.Fragment>
			<div className="rotate" />
			<div className="rotate" />
			<div className="rotate" />
		</React.Fragment>
	);
}
