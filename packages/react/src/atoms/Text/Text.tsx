import React, { FC } from "react";
import { FontSize } from "@cgweb/foundation";

export interface TextProps {
  size?: keyof typeof FontSize;
  children: any;
}

const Text: FC<TextProps> = ({ size = FontSize.base, children }) => {
  const className = `dse-text dse-text-${size}`;

  return <p className={className}>{children}</p>;
};

export default Text;
