import moon from "./../../assets/moon.jpg";
import sun from "./../../assets/sun.webp";
import { useTheme } from "../../context/theme";

const ButtonTheme = () => {
    const {theme, toggleTheme} = useTheme();
  
  return (
    <button
      className={`w-16 justify-between ${
        theme === 'light' ? "bg-white" : "bg-gray-600"
      } duration-500 rounded-3xl p-1 cursor-pointer flex`}
      onClick={toggleTheme}
    >
    <img src={theme === 'light' ? sun : moon} alt="" className={`w-6 rounded-full cursor-pointer duration-500 ${theme === 'light' ? "translate-x-8" : "translate-x-0"} `} />
    </button>
  );
};

export default ButtonTheme;
