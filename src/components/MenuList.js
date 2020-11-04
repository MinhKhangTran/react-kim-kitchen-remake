import React from "react";
import MenuItem from "./MenuItem";
import { useGlobalContext } from "../context/context";

export default function MenuList() {
  const { menuItem } = useGlobalContext();
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
      {menuItem.map((item) => {
        return <MenuItem key={item.id} {...item}></MenuItem>;
      })}
    </div>
  );
}
