import { useTranslation } from "react-i18next";
import uzb from "./../../assets/Uzb.png";
import React, { ChangeEvent, useState } from "react";

const Language: React.FC = () => {
  const {
    i18n: { language, changeLanguage },
  } = useTranslation();

  const [currentLanguage, setCurrentLanguage] = React.useState(language);

  const handleChangeLanguage = (event: ChangeEvent<HTMLSelectElement>) => {
    const newLanguage = event.target.value;
    setCurrentLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    changeLanguage(newLanguage);
  };

  return (
    <div className="">
      <select
        value={currentLanguage}
        onChange={handleChangeLanguage}
        className=" outline-0 cursor-pointer dark:text-white "
      >
        <option value="uz" data-thumbnail={uzb}>
          Uz <img src={uzb} alt="" />
        </option>
        <option value="ru">Ru</option>
        <option value="eng">Eng</option>
      </select>
    </div>
  );
};

export default Language;
