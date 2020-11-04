import React from "react";
import { about } from "../assets/data";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <section className="w-11/12 md:w-2/3 mx-auto mt-4" id="about">
        {about.map((item, index) => {
          const { title, img, desc } = item;
          return (
            <article className="flex flex-wrap md:flex-no-wrap">
              <div className="md:w-1/2 w-full">
                <h1 className="underline text-red-600 text-2xl font-semibold">
                  {title}
                </h1>
                <h1 className="tracking-widest">{desc}</h1>
                <button className="mx-auto mt-8 inline-block bg-red-500 text-red-100 md:w-1/2 w-2/3 mb-4 md:mb-0 py-2 rounded-lg text-2xl hover:bg-red-200 hover:text-red-500">
                  <Link to="/menu">Entdecke mehr</Link>
                </button>
              </div>
              <div className="md:w-1/2 w-full" style={{ height: "250px" }}>
                <img
                  className="w-full h-full object-cover rounded-lg"
                  src={img}
                  alt="bild"
                />
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
}
