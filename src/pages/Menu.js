import React from "react";
import { MenuList } from "../components";
import { useGlobalContext } from "../context/context";
import { Link } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";

export default function Menu() {
  const { category, handleClick, menuItem } = useGlobalContext();
  return (
    <section className="bg-red-200 h-full py-4">
      <div className="w-11/12 md:w-2/3 mx-auto ">
        <h1 className="underline text-red-600 text-2xl font-semibold text-center pt-8">
          Unser Menü
        </h1>
        <div className="flex justify-center">
          {category.map((item, index) => {
            return (
              <button
                className="border border-red-500 rounded px-4 py-1 mx-2 my-4 capitalize"
                key={index}
                onClick={() => {
                  handleClick(item);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
        <MenuList></MenuList>
      </div>
      <button className="absolute top-0 left-0 text-6xl font-bold text-red-600 p-2">
        <Link to="/">
          <AiOutlineRollback></AiOutlineRollback>
        </Link>
      </button>
    </section>
  );
}
