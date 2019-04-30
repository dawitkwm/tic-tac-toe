import React from "react";
import { shallow } from "enzyme";

import Board from "./board";

describe("Board component", () => {
  it("should render Board component", () => {
    const boardWrapper = shallow(<Board />);
    expect(boardWrapper).toMatchSnapshot();
  });

  it("should have nine tiles", () => {
    const boardWrapper = shallow(<Board />);
    expect(boardWrapper.find("Tile").length).toEqual(9);
  });
});
