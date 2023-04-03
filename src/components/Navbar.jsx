import React from "react";

import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
        <p className="text-white text-[18px] font-bold cursor-pointer flex">
          समानता
        </p>
      </div>
    </nav>
  );
};

export default Navbar;