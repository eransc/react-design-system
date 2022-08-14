import { Spacing } from "@cgweb/foundation";
import React, { FC } from "react";

export interface MarginProps {
  space?: keyof typeof Spacing;
  left?: boolean;
  right?: boolean;
  top?: boolean;
  bottom?: boolean;
  children: any;
}

const Margin: FC<MarginProps> = ({
  space = Spacing.xxxs,
  children,
  left,
  right,
  top,
  bottom,
}) => {
  let className = ``;

  if (!left && !right && !bottom && !top) {
    className = `dse-margin-${space}`;
  }

  if (left) {
    className = `${className} dse-margin-left-${space}`;
  }
  if (right) {
    className = `${className} dse-margin-right-${space}`;
  }
  if (top) {
    className = `${className} dse-margin-top-${space}`;
  }
  if (bottom) {
    className = `${className} dse-margin-bottom-${space}`;
  }

  // dse-margin-left-sm
  // dse-margin-right-xl
  // dse-margin-xl

  return <div className={className}>{children}</div>;
};

export default Margin;
