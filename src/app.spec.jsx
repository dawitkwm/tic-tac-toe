import React from "react";
import { shallow, mount } from "enzyme";

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
  it("game history should initially be of size one", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("history").length).toEqual(1);
  });

  it("number of moves should initially be zero", () => {
    const appWrapper = shallow(<App />);
    expect(appWrapper.state("moveNumber")).toEqual(0);
  });

  it("when Tile is clicked, game history size should increase by one", () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.state("history").length).toEqual(1);
    const tileWrapper = appWrapper.find("Tile").at(0);
    tileWrapper.find("button.tile").simulate("click");
    expect(appWrapper.state("history").length).toEqual(2);
  });

  it("when Tile is clicked while game is not over, number of moves should increase by one", () => {
    const appWrapper = mount(<App />);
    expect(appWrapper.state("moveNumber")).toEqual(0);
    const tileWrapper = appWrapper.find("Tile").at(0);
    tileWrapper.find("button.tile").simulate("click");
    expect(appWrapper.state("moveNumber")).toEqual(1);
  });

  it("a Tile should initially be emtpy", () => {
    const appWrapper = mount(<App />);
    const tileButton = appWrapper.find("button.tile").at(0);
    expect(tileButton.text()).toEqual("");
  });
});
