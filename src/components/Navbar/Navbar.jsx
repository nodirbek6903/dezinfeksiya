import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../images/logo2.png";
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
        <div className="nav-items">
          <a href="#">{t("nav-item1")}</a>
          <a href="#about">{t("nav-item1")}</a>
          <a href="#xizmatlar">{t("nav-item3")}</a>
          <a href="#faq">{t("nav-item4")}</a>
        </div>
        <select name="languages" onChange={changeLanguage} id="" className="language-items">
          <option value="ru">Русский</option>
          <option value="uz">O'zbekcha</option>
        </select>
        <div className="nav-button">
          <a href="tel:+998903646903">
            <button>{t("nav-button")}</button>
          </a>
        </div>
        {openIcon ? (
          <FaTimes className="bars-icon" onClick={() => handleOpenIcon()} />
        ) : (
          <FaBars className="bars-icon" onClick={() => handleOpenIcon()} />
        )}
      </div>
      {openIcon && (
        <div className="mobile-nav">
          <a href="#">{t("nav-item1")}</a>
          <a href="#about">
          {t("nav-item2")}
          </a>
          <a href="#xizmatlar">
          {t("nav-item3")}
          </a>
          <a href="#faq">
          {t("nav-item4")}
          </a>
          <a href="tel:+998903646903">
          <button className="mob-btn">
            {t("nav-button")}
          </button>
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
