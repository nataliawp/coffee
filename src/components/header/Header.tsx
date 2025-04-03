import logo from "./../../assets/netWO.svg";
import logoligth from "./../../assets/logolight.svg";
import Nav from "./Nav";
import menuicon from "./../../assets/iconmenu.svg";
import { useState } from "react";
import ButtonTheme from "./ButtonTheme";
import Language from "./Language";
import { useTheme } from "../../context/theme";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const {theme} = useTheme()

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className=" py-4 px-3 md:py-6 fixed top-0 left-0 w-full dark:bg-[#191718]  bg-[#F8D4B4]">
      <div className="container mx-auto flex justify-between items-center">
        {theme === "dark" ? <img src={logo} alt="" className="" /> : <img src={logoligth} alt="" className="" /> }
        <Nav menu={menu} toggleMenu={toggleMenu} />
        <ButtonTheme />
        <Language />
        <button className=" md:block hidden px-9 py-2.5 rounded-4xl bg-[#EC9349] text-white md:text-xl cursor-pointer">
          Login
        </button>
        <button
          className="block md:hidden  w-8 cursor-pointer"
          onClick={toggleMenu}
        >
          <img src={menuicon} alt="" />
        </button>
      </div>
    </header>
  );
};

export default Header;
