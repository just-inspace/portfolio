import { shallow, mount, render } from "enzyme";
import Home from "../home.js";
import React from "react";

describe("Home", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Home />);
		expect(wrapper).toMatchSnapshot();
	});
});
