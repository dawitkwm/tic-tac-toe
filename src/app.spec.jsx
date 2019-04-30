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

  //size 1 reflects the current empty board
  it("game history should initially be of size 1", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("history").length).toEqual(1);
  });
});
