import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/dezinfaction-logo.png";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openIcon, setOpenIcon] = useState(false);
  const {t, i18n} = useTranslation()

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value)
  }

  const handleOpenIcon = () => {
    setOpenIcon(!openIcon);
  };
  return (
    <div className="nav-container">
      <div className="logo-container">
        <a href="#"><img src={Logo} alt="Logo" /></a>
      </div>
      <div className="item-container">
        <div className={`nav-items ${openIcon ? "active" : ""}`}>
          <a href="#">{t("nav-item1")}</a>
          <a href="#about">{t("nav-item2")}</a>
          <a href="#xizmatlar">{t("nav-item3")}</a>
          <a href="#faq">{t("nav-item4")}</a>
        </div>
        <select name="languages" onChange={changeLanguage} id="" className="language-items">
          <option value="ru">Русский</option>
          <option value="uz">O'zbekcha</option>
        </select>
        {openIcon ? (
          <FaTimes className="bars-icon" onClick={() => handleOpenIcon()} />
        ) : (
          <FaBars className="bars-icon" onClick={() => handleOpenIcon()} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
