import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import SideNav from "./components/sideNav";
import Home from "./components/home";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Contact from "./components/contact";

class App extends Component {
	render() {
		return (
			<HashRouter>
				<div id="app">
					<SideNav />
					<div id="page">
						<Route exact path="/" component={Home} />
						<Route path="/projects" component={Projects} />
						<Route path="/resume" component={Resume} />
						<Route path="/contact" component={Contact} />
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
