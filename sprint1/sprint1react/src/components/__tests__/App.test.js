import { shallow } from "enzyme";
import App from "../App.js";
import React from "react";

describe("App", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<App />);
		expect(wrapper).toMatchSnapshot();
	});
});

it("renders App with SidebarContainer", () => {
	const wrapper = shallow(<App />);

	expect(wrapper.find(SidebarContainer).length).toEqual(1);
});

it("renders App with PageRouter", () => {
	const wrapper = shallow(<App />);

	expect(wrapper.find(PageContainer).length).toEqual(1);
});
