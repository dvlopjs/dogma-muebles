"use client";

import { motion } from "framer-motion";
import React from "react";

export default function LeftToRightAnimate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: -200 },
      }}
    >
      {children}
    </motion.div>
  );
}
