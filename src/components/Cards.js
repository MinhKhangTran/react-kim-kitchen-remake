import React from "react";
import Card from "./Card";
import { card } from "../assets/data";

export default function Cards() {
  return (
    <section className="bg-red-200 grid md:grid-cols-4 grid-cols-1 p-4">
      {card.map((item) => {
        return <Card key={item.id} {...item}></Card>;
      })}
    </section>
  );
}
