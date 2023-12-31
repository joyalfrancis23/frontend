import React from "react";

import { styles } from "../styles";
import { logo } from "../assets";

const Navbar = () => {
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-[#171D1C] `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <img src={logo} alt="logo" className="w-11 h-11 object-contain" />
        <p className="text-[#F6FEDB] text-[24px] font-bold cursor-pointer flex">
          समानता
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
