"use client";
import React, { useEffect, useState } from "react";
import { GoogleGeminiEffectDemo } from "./GeminiHero";
import { WobbleCard } from "../_acternityComponents/ui/wobble-card";
import { WobbleCardDemo } from "./WobbleCard";
import Footer from "./Footer";
import { LampContainer } from "../_acternityComponents/ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  const [yValue, setYValue] = useState(-140);

  useEffect(() => {
    const updateYValue = () => {
      const height = window.innerHeight;
      // const width = window.innerWidth;
      if (height <= 600) {
        setYValue(-50);
      } else if (height > 600 && height <= 1024) {
        setYValue(0);
      } else if (height > 1025) {
        setYValue(-150);
      }

      console.log(height);
    };

    window.addEventListener("resize", updateYValue);
    updateYValue();

    return () => {
      window.removeEventListener("resize", updateYValue);
    };
  }, []);

  return (
    <div className="w-screen">
      {/* <GoogleGeminiEffectDemo /> */}
      <LampContainer className="h-screen">
        <motion.h1
          initial={{ opacity: 0.5, y: 150 }}
          whileInView={{ opacity: 1, y: yValue }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-3 bg-gradient-to-br from-slate-300 to-black py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          AI Form Builder
        </motion.h1>
      </LampContainer>

      <WobbleCardDemo />
      <Footer />
    </div>
  );
};

export default Hero;
