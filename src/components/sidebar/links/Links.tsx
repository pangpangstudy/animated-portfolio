import { motion, Variant } from "framer-motion";
import React from "react";

type Props = {};
const variants: Record<string, Variant> = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  close: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: 50,
    opacity: 0,
  },
};
const Links = (props: Props) => {
  const items = ["Homepage", "Services", "Portfolio", "Contact", "About"];
  return (
    <motion.div className="links" variants={variants}>
      {items.map((item, i) => {
        return (
          <motion.a
            href={`#${item}`}
            key={item}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {item}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
