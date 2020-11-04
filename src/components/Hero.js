import React from "react";
import { useGlobalContext } from "../context/context";
import { FaPepperHot } from "react-icons/fa";
import { motion } from "framer-motion";
import { hero } from "../assets/data";

export default function Hero() {
  const { openNav } = useGlobalContext();
  return (
    <section
      className="w-full h-screen bg-red-100"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dwryyoyd7/image/upload/v1604478828/Kim_Kitchen/953f9a21dbdd99dd2bdda9306e056bd9-w2880-b7_1_f8bgk8.png')",
      }}
    >
      <motion.button
        className="absolute top-0 right-0 m-8 text-4xl text-red-500"
        onClick={openNav}
        animate={{
          scale: [1, 1.25],
        }}
        transition={{
          duration: 0.5,

          yoyo: Infinity,
        }}
      >
        <FaPepperHot></FaPepperHot>
      </motion.button>
      <div className="grid content-center justify-center text-center h-full w-full z-20">
        {hero.map((item, index) => {
          const { desc, titel } = item;
          return (
            <>
              <h1 className="text-red-200 text-4xl font-bold">{titel}</h1>
              <h2 className="text-red-100 text-2xl font-semibold mt-4 px-20">
                {desc}
              </h2>
              <button className="mx-auto mt-8 inline-block bg-red-500 text-red-100 md:w-1/5 w-1/2 py-2 rounded-lg text-2xl hover:bg-red-200 hover:text-red-500">
                <a href="#about">Entdecke mehr</a>
              </button>
            </>
          );
        })}
      </div>
    </section>
  );
}
