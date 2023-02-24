// project import
import pages from "./pages";
import dashboard from "./dashboard";
import utilities from "./utilities";
import support from "./support";
import towers from "./towers";
import yourAccount from "./yourAccount";

// ==============================|| MENU ITEMS ||============================== //

const menuItems = {
  items: [...dashboard, towers],
  // items: [yourAccount, dashboard, pages, utilities, support],
};

export default menuItems;
