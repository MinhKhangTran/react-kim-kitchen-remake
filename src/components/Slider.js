import React from "react";
import { useGlobalContext } from "../context/context";
import { BsChevronDoubleRight, BsChevronDoubleLeft } from "react-icons/bs";
export default function Slider() {
  const { bilder, value, prevPic, nextPic } = useGlobalContext();
  return (
    <div className="w-11/12 md:w-2/3 mx-auto" id="gallery">
      <section className="relative mt-8">
        <h1 className="underline text-red-600 text-2xl font-semibold my-4">
          Unsere Favoriten
        </h1>
        <div>
          <button
            className="absolute letf-0 text-3xl text-red-500 bg-red-100 p-2 rounded z-20"
            style={{ top: "50%" }}
            onClick={prevPic}
          >
            <BsChevronDoubleLeft></BsChevronDoubleLeft>
          </button>
          <button
            className="absolute right-0 text-3xl text-red-500 bg-red-100 p-2 rounded z-20"
            style={{ top: "50%" }}
            onClick={nextPic}
          >
            <BsChevronDoubleRight></BsChevronDoubleRight>
          </button>
          <div
            style={{ maxWidth: "750px", height: "350px" }}
            className="mx-auto relative overflow-hidden"
          >
            {bilder.map((bild, index) => {
              let position = "transform translate-x-full";
              if (index === value) {
                position = "transform translate-x-0";
              }
              if (
                index === value - 1 ||
                (value === 0 && index === bilder.length - 1)
              ) {
                position = "transform -translate-x-full";
              }
              return (
                <img
                  className={`${position} w-full h-full object-cover rounded-lg absolute top-0 left-0 right-0 transition transition-all duration-700 ease-in-out`}
                  src={bild}
                  alt="food-1"
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
