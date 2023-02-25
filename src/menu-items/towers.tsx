// assets
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";
import { towersData } from "pages/dashboard/OrdersTable";

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const towers = {
  id: "towers",
  title: "Towers",
  type: "group",
  children: [...towersData].splice(0, 5).map((item) => {
    return {
      id: item.antenna_number,
      title: item.site_address,
      type: "item",
      url: "/tower/" + item.antenna_number,
      icon: icons.ChromeOutlined,
    };
  }),
};

export default towers;
