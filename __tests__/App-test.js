/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import RemixIcon from "../src";
import fs from "fs";
import path from "path";
const IconNames = fs
  .readFileSync(path.resolve(__dirname, "../src/icons/index.js"), "utf8")
  .match(/export \{ default as (\w+) \} from "\.\/(\w+)";/g)
  .map(icon => {
    const name = icon
      .match(/export \{ default as (\w+) \} from "\.\/(\w+)";/)[1]
      .toString();
    return name;
  });
it("app renders correctly", () => {
  renderer.create(<App />);
});

// test all icons
IconNames.forEach(icon => {
  it(`${icon} renders correctly`, () => {
    renderer.create(<RemixIcon name={icon.name} />);
  });
});
