// @ts-nocheck comment at the top of a file
import React from "react";
// import "./main";
// import "./polyfills";
// import "./runtime";
import "./styles.css";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tower-dashboard": MyElementAttributes;
    }

    interface MyElementAttributes {
      // name: string;
    }
  }
}

type Props = {};

const TowerDetails = (props: Props) => {
  return (
    <div>
      <tower-dashboard></tower-dashboard>
    </div>
  );
};

export default TowerDetails;
