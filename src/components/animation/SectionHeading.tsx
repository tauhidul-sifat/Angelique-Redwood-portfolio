"use client";
import { animationVariant } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

const SectionHeading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div>
      <motion.h2
        variants={animationVariant}
        initial="hidden"
        animate="visible"
        className={cn(" drop-shadow-2xl", className)}
      >
        {children}
      </motion.h2>
    </div>
  );
};

export default SectionHeading;
