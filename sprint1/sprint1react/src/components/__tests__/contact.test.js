import { shallow, mount, render } from "enzyme";
import Contact from "../contact.js";
import React from "react";

describe("Contact", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Contact />);
		expect(wrapper).toMatchSnapshot();
	});
});
