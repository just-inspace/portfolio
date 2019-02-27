import { shallow, mount, render } from "enzyme";
import Resume from "../resume.js";
import React from "react";

describe("Resume", () => {
	it("renders correctly", () => {
		const wrapper = shallow(<Resume />);
		expect(wrapper).toMatchSnapshot();
	});
});
