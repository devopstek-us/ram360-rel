
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ==============================|| NAVIGATION - SCROLL TO TOP ||============================== //

interface ScrollTopProps {
  children: React.ReactElement;
}
const ScrollTop = ({ children }: ScrollTopProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children;
};

export default ScrollTop;
