import { Variant, motion } from "framer-motion";
import React, { useState } from "react";

type Props = {};

const Test = (props: Props) => {
  const [open, setOpen] = useState<boolean>(false);
  // const variants: Record<string, Variant> = {
  //   visible: {
  //     opacity: 1,
  //     x: 100,
  //     transition: {
  //       // duration: 2
  //       type: "spring",
  //       stiffness: 2000,
  //       damping: 100,
  //     },
  //   },
  //   hidden: { opacity: 0 },
  // };
  const variants: Record<string, Variant> = {
    // visible: {
    //   opacity: 1,
    //   x: 100,
    //   transition: {
    //     staggerChildren: 0.2,
    //   },
    // },
    visible: (i) => {
      console.log(i); //custom
      return {
        opacity: 1,
        x: 100,
        transition: {
          delay: i * 0.3,
        },
      };
    },
    hidden: { opacity: 0 },
  };
  const items = ["item1", "item2", "item3", "item4"];
  return (
    <div className="course">
      {/* <motion.div
        className="box"
        initial={{ opacity: 1, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1, x: 200, y: 200 }}
        transition={{ duration: 2, delay: 1 }}
        whileHover={{ opacity: 1, scale: 2 }}
        whileInView={{ opacity: 1, scale: 2 }}
        drag
      ></motion.div> */}
      {/* <motion.div
        className="box"
        variants={variants}
        // initial="hidden"
        // animate="visible"

        animate={open ? "visible" : "hidden"}
      ></motion.div>
      <button onClick={() => setOpen((open) => !open)}>Click</button> */}
      <motion.ul initial="hidden" animate="visible" variants={variants}>
        {items.map((item, i) => (
          <motion.li variants={variants} key={item} custom={i}>
            {item}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Test;
