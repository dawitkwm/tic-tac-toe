import React from "react";
import { shallow } from "enzyme";

import History from "./history";

describe("History component", () => {
  it("should render History component", () => {
    const historyWrapper = shallow(<History />);
    expect(historyWrapper).toMatchSnapshot();
  });
});
