import React from "react";
import { shallow } from "enzyme";

import App from "./app";

describe("App component", () => {
  it("should render game App component", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper).toMatchSnapshot();
  });

  it("player x should start the game", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("xTurn")).toEqual(true);
  });
});
