import React, { Component } from "react";
import SidebarContainer from "./sidebarContainer";
import PageContainer from "./pageContainer";

class App extends Component {
	render() {
		return (
			<div id="app">
				<SidebarContainer />
				<PageContainer />
			</div>
		);
	}
}

export default App;
