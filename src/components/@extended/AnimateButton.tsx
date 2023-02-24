// third-party
import { motion } from "framer-motion";

// ==============================|| ANIMATION BUTTON ||============================== //
interface Props {
  children: React.ReactNode;
  type?: "rotate" | "slide" | "scale";
}
export default function AnimateButton({ children, type = "scale" }: Props) {
  switch (type) {
    case "rotate": // only available in paid version
    case "slide": // only available in paid version
    case "scale": // only available in paid version
    default:
      return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      );
  }
}
