import React from "react";
import Color from "./Color";
import { text, select } from "@storybook/addon-knobs";

import "@cgweb/scss/lib/Utilities.css";
import { Spacing } from "@cgweb/foundation";

export default {
  title: "Atoms|Color",
};

export const Common = () => <Color hexCode={text("HexCode", "pink")} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "green")}
    width={select("Width", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);
