import React from "react";
import { slider, menu } from "../assets/data";

export const Appcontext = React.createContext();

export const AppProvider = ({ children }) => {
  // navbar
  const [toggleNav, setToggleNav] = React.useState(false);

  const openNav = () => {
    setToggleNav(true);
  };
  const closeNav = () => {
    setToggleNav(false);
  };
  // Slider
  const [bilder, setBilder] = React.useState(slider);
  const [value, setValue] = React.useState(0);

  const nextPic = () => {
    setValue((oldValue) => {
      let index = oldValue + 1;
      if (index > bilder.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  const prevPic = () => {
    setValue((oldValue) => {
      let index = oldValue - 1;
      if (index < 0) {
        index = bilder.length - 1;
      }
      return index;
    });
  };
  // Menu
  const categories = ["all", ...new Set(menu.map((item) => item.category))];
  const [category, setCategory] = React.useState(categories);
  const [menuItem, setMenuItem] = React.useState(menu);

  const handleClick = (category) => {
    if (category === "all") {
      setMenuItem(menu);
      return;
    }
    setMenuItem(menu.filter((item) => item.category === category));
  };
  return (
    <Appcontext.Provider
      value={{
        toggleNav,
        openNav,
        closeNav,
        bilder,
        value,
        prevPic,
        nextPic,
        category,
        handleClick,
        menuItem,
      }}
    >
      {children}
    </Appcontext.Provider>
  );
};

export const useGlobalContext = () => {
  return React.useContext(Appcontext);
};
