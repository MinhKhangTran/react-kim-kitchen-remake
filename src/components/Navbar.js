import React from "react";
import { useGlobalContext } from "../context/context";
import { FaTimes } from "react-icons/fa";
import { navbar } from "../assets/data";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { toggleNav, closeNav } = useGlobalContext();
  return (
    <aside
      className={`${
        toggleNav
          ? "bg-red-400 md:w-1/3 w-screen h-screen fixed top-0 right-0 z-10 transform translate-x-0 transition transition-all duration-700 ease-in-out"
          : "bg-red-400 md:w-1/3 w-screen h-screen fixed top-0 right-0 z-10 transform translate-x-full transition transition-all duration-700 ease-in-out"
      }`}
    >
      <button onClick={closeNav} className="text-red-100 text-3xl p-4">
        <FaTimes></FaTimes>
      </button>
      <h1 className="text-3xl text-red-100 text-center mb-4 mt-8">
        Kim's Kitchen
      </h1>
      <div className="flex flex-col text-red-200 font-mono tracking-wider text-2xl">
        {navbar.map((item) => {
          const { id, url, text } = item;
          return (
            <button className="my-2" key={id} onClick={closeNav}>
              <a href={url}>{text}</a>
            </button>
          );
        })}
        <button className="my-2" onClick={closeNav}>
          <Link to="/menu">Menu</Link>
        </button>
      </div>
    </aside>
  );
}
