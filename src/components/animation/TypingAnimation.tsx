"use client";
import { TypeAnimation } from "react-type-animation";
const TypingAnimation = () => {
  return (
    <TypeAnimation
      sequence={[
        "to the literary world of",
        1000,
        "to the literary world of Angelique Redwood",
        1000,
      ]}
      speed={20}
      style={{ fontSize: "1em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};

export default TypingAnimation;
