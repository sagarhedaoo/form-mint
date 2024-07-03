"use client";
import React from "react";
import { GoogleGeminiEffectDemo } from "./GeminiHero";
import { WobbleCard } from "../_acternityComponents/ui/wobble-card";
import { WobbleCardDemo } from "./WobbleCard";
import Footer from "./Footer";
import { LampContainer } from "../_acternityComponents/ui/lamp";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-w-full">
      {/* <GoogleGeminiEffectDemo /> */}
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
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
