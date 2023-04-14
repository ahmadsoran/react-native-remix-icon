/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";
import RemixIcon from "../src";

it("app renders correctly", () => {
  renderer.create(<App />);
});

// test RemixIcon component with snapshot
it("icon renders correctly", () => {
  renderer.create(<RemixIcon name="User2Fill" color="#006aff" size="48" />);
});
