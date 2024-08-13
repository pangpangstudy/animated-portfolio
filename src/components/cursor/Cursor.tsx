import React, { useEffect } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const DelayedCursor = () => {
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{
        position: "fixed",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        backgroundColor: "red",
        pointerEvents: "none",
        x: cursorXSpring,
        y: cursorYSpring,
      }}
    />
  );
};

export default DelayedCursor;
