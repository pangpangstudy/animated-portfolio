import React, { useState } from "react";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleBUtton";
import { motion, Variant } from "framer-motion";
type Props = {};

const Sidebar = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  const variants: Record<string, Variant> = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },

    close: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open" : "close"}>
      {/* 变体的继承：在 Framer Motion 中，子元素会自动继承父元素的动画状态。 */}
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
