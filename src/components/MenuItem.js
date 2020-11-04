import React from "react";

export default function MenuItem({ title, price, img, desc }) {
  return (
    <div className="">
      <div className="flex justify-between capitalize text-red-500 text-lg mb-2 font-semibold">
        <h1>{title}</h1>
        <h1>{price} €</h1>
      </div>
      <div
        className="flex justify-center w-full object-cover"
        style={{ height: "350px" }}
      >
        <img
          className="h-full w-full rounded-lg border-4 border-red-400"
          src={img}
          alt={title}
        />
      </div>
      <p className="text-red-500 tracking-wider text-lg">{desc}</p>
    </div>
  );
}
