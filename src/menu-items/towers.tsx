// assets
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";

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
  children: [
    {
      id: "tower1",
      title: "Tower 1",
      type: "item",
      url: "/tower/1",
      icon: icons.ChromeOutlined,
    },
    {
      id: "tower2",
      title: "Tower 2",
      type: "item",
      url: "/tower/2",
      icon: icons.ChromeOutlined,
    },
    {
      id: "tower3",
      title: "Tower 3",
      type: "item",
      url: "/tower/3",
      // url: "/dashboard/default",
      icon: icons.ChromeOutlined,
    },
    {
      id: "tower4",
      title: "Tower 4",
      type: "item",
      url: "/tower/4",
      icon: icons.ChromeOutlined,
    },
  ],
};

export default towers;
