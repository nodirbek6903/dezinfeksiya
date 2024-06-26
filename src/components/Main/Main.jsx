import React from "react";
import MainImg from "../../images/main-12.png";
import "./Main.css";
import { useTranslation } from "react-i18next";

const Main = () => {

  const {t} = useTranslation()
  return (
    <div className="main-container" id="main">
      <div className="main-left-section">
        <div className="left-title">
          <h1 data-aos="fade-right" data-aos-duration="1000">{t("main-title")}</h1>
          <p data-aos="fade-right" data-aos-duration="1000">
            {t("main-description")}
          </p>
        </div>
        <div className="left-btn" data-aos="fade-right" data-aos-duration="1500">
          <a href="#contact">
            <button>{t("main-button")}</button>
          </a>
        </div>
      </div>
      <div className="main-right-section">
        <div className="right-img">
          <img src={MainImg} alt="MainImg" />
        </div>
      </div>
    </div>
  );
};

export default Main;
