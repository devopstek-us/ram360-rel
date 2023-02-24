// assets
import { ChromeOutlined, QuestionOutlined } from "@ant-design/icons";

// icons
const icons = {
  ChromeOutlined,
  QuestionOutlined,
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: "support",
  title: "Help & Support",
  type: "group",
  children: [
    {
      id: "video-guides",
      title: "Video Guides",
      type: "item",
      url: "/sample-page",
      icon: icons.ChromeOutlined,
    },
    {
      id: "documentation",
      title: "Help Center",
      type: "item",
      url: "https://www.help.ram360.com/",
      icon: icons.QuestionOutlined,
      external: true,
      target: true,
    },
  ],
};

export default support;
