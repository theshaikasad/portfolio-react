import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function MultiLayerParallax1() {
  const ref = useRef(null);

  // Using useScroll hook to track scroll position
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Transforming scrollYProgress for background and text
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["-0%", "200%"]);

  return (
    <div id="SKILLS"
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center pt-8"
    >
      {/* Text with parallax effect */}
      <motion.h1
        style={{ y: textY }}
        className="font-bold text-white text-7xl md:text-9xl relative z-10"
      > 
        Skills
      </motion.h1>

      {/* Background image with parallax effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/image-full1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY, // Applying the y transformation
        }}
      />
      {/* Additional image or layer */}
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/image-bottom1.png)`,
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
