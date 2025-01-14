"use client";
import { buttonAnimationVariant } from "@/constants";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const ButtonAnimation = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={buttonAnimationVariant}
      initial="hidden"
      whileInView="visible"
      whileHover="whileHover"
      whileTap="whileTap"
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
};

export default ButtonAnimation;
