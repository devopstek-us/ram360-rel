import React from "react";
import { towersData } from "pages/dashboard/OrdersTable";
// import "./main";
// import "./polyfills";
// import "./runtime";
// @ ts-nocheck comment at the top of a file
import "./styles.css";
import { Navigate, useParams } from "react-router-dom";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "tower-dashboard": MyElementAttributes;
    }

    interface MyElementAttributes {
      tower: any;
    }
  }
}

type Props = {};
const TowerDetails = (props: Props) => {
  const { id } = useParams<{ id?: string }>();
  const towerId = id ? parseInt(id) : null;
  const tower = towersData.find((item) => item.antenna_number === towerId);
  return !tower ? (
    <Navigate to={"/invalid-tower"} />
  ) : (
    <div>
      <tower-dashboard tower={tower}></tower-dashboard>
    </div>
  );
};

export default TowerDetails;
