// assets
import { DollarCircleOutlined, SettingOutlined } from "@ant-design/icons";
import { RoutePathList } from "routes/RoutePath";

// ==============================|| MENU ITEMS - FOR SHOWING DIRECT LINKS ||============================== //

const yourAccount = {
  id: "your_account",
  title: "Your Account",
  type: "group",
  children: [
    {
      id: "plan_billing",
      title: "Plan & Billing",
      type: "item",
      url: RoutePathList.dashboard,
      icon: DollarCircleOutlined,
    },
    {
      id: "settings",
      title: "Settings",
      type: "item",
      url: RoutePathList.dashboard,
      icon: SettingOutlined,
    },
  ],
};
export default yourAccount;
