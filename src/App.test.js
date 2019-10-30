import React from "react";
import ReactDOM from "react-dom";

import { shallow } from "enzyme";

import App from "./App";
import Counter from "./components/Counter";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("prompts the user where theyre at", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.contains(<h1>Count</h1>)).toBe(true);
  });

  it("renders a number 1 when it starts", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.find(".count").text()).toEqual("0");
  });

  it("renders a button", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.exists(".button")).toEqual(true);
  });

  it("increments count if the button is clicked", () => {
    const wrapper = shallow(<Counter />);
    const button = wrapper.find(".button");
    button.simulate("click");
    wrapper.update();
    expect(wrapper.find(".count").text()).toEqual("1");
  });
});
