import React from "react";
import { shallow } from "enzyme";

import Board from "./board";

describe("Board component", () => {
  it("should render Board component", () => {
    const boardComponent = shallow(<Board />);
    expect(boardComponent).toMatchSnapshot();
  });

  it("should have nine tiles", () => {
    const boardComponent = shallow(<Board />);
    expect(boardComponent.state("tiles").length).toEqual(9);
  });
});
