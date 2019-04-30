import React from "react";
import { shallow } from "enzyme";

import Tile from "./tile";

describe("Tile", () => {
  it("should render Tile component", () => {
    const tileWrapper = shallow(<Tile />);
    expect(tileWrapper).toMatchSnapshot();
  });
});
