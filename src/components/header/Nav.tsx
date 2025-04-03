import { t } from "i18next";
import { useTranslation } from "react-i18next";

const items = [
  { link: "/", title: "home" },
  { link: "/about", title: "about" },
  { link: "/contact", title: "contact" },
];

interface NavProps {
  menu: boolean;
  toggleMenu: () => void;
}

const Nav: React.FC<NavProps> = ({ menu, toggleMenu }) => {
  const { t } = useTranslation();
  return (
    <nav
      className={`md:relative md:h-max md:bg-transparent md:w-max z-20 w-[80%] fixed bg-[#191718] h-dvh top-0 ${
        menu ? "right-0" : "right-[-100%]"
      } duration-500  md:p-0 px-8 py-4 md:static`}
    >
      <button
        className="w-full text-end dark:text-white text-3xl cursor-pointer block md:hidden"
        onClick={toggleMenu}
      >
        x
      </button>
      <ul className="w-full  lg:w-xl md:min-w-max md:flex justify-end text-center gap-18">
        {items.map((item, index) => (
          <a href={item.link} key={index} className="">
            <li className="dark:text-white md:mb-0 mb-5 hover:text-[#EC9349] delay-100 md:text-xl">{t(item.title)}</li>
          </a>
        ))}
      </ul>
      <button className="flex md:py-10 md:hidden mx-auto px-6 py-2 rounded-4xl bg-[#EC9349] text-white ">
        Login
      </button>
    </nav>
  );
};

export default Nav;
