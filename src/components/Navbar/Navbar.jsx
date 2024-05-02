import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Logo from "../../images/dez-logo14.webp";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [openIcon, setOpenIcon] = useState(false);
  const [shadow,setShadow] = useState(false)
  const {t, i18n} = useTranslation()


  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > 0){
        setShadow(true)
      }
      else{
        setShadow(false)
      }
    }

    window.addEventListener("scroll",handleScroll)
    return () => {
      window.removeEventListener("scroll",handleScroll)
    }
  },[])

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value
    localStorage.setItem("language",selectedLanguage)
    i18n.changeLanguage(selectedLanguage)
  }

  const handleOpenIcon = () => {
    setOpenIcon(!openIcon);
  };
  return (
    <div className={`nav-container ${shadow ? "shadow" : ""}`}>
      <div className="container">
      <div className="logo-container">
        <a href="#"><img src={Logo} alt="Logo" /></a>
      </div>
      <div className="item-container">
        <div className={`nav-items ${openIcon ? "active" : ""}`}>
          <a href="#" onClick={() => handleOpenIcon()}>{t("nav-item1")}</a>
          <a href="#about" onClick={() => handleOpenIcon()}>{t("nav-item2")}</a>
          <a href="#xizmatlar" onClick={() => handleOpenIcon()}>{t("nav-item3")}</a>
          <a href="#faq" onClick={() => handleOpenIcon()}>{t("nav-item4")}</a>
        </div>
        <select name="languages" onChange={changeLanguage} value={localStorage.getItem("language")} id="" className="language-items">
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
    </div>
  );
};

export default Navbar;
