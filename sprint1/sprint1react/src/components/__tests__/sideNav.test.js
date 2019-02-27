import { shallow, mount, render } from "enzyme";
import SideNav from "../sideNav.js";
import React from "react";

describe("SideNav", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<SideNav />);
		expect(wrapper).toMatchSnapshot();
	});
});
