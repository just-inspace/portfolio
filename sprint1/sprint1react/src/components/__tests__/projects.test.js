import { shallow, mount, render } from "enzyme";
import Projects from "../Projects.js";
import React from "react";

describe("Projects", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Projects />);
		expect(wrapper).toMatchSnapshot();
	});
});
