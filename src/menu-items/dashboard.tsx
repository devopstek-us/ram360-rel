// assets
import { DashboardOutlined } from "@ant-design/icons";

// icons
const icons = {
  DashboardOutlined,
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = [
  {
    id: "home",
    title: "Home",
    type: "item",
    url: "/",
    icon: icons.DashboardOutlined,
    breadcrumbs: false,
  },
  // {
  //   id: "towers",
  //   title: "Towers",
  //   type: "item",
  //   url: "/towers",
  //   icon: icons.DashboardOutlined,
  //   breadcrumbs: false,
  // },
];

export default dashboard;
