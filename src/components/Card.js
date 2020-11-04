import React from "react";

export default function Card({ icon, text }) {
  return (
    <article className="text-center p-8">
      <div className="flex justify-center text-4xl text-red-500">{icon}</div>
      <h1 className="text-red-500 font-semibold text-2xl mt-8">{text}</h1>
    </article>
  );
}
