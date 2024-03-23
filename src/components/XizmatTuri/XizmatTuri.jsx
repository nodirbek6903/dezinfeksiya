import React from "react";
import "./XizmatTuri.css";
import Odamlar from "../../images/xiz-tur-card-2.jpg";
import XizTurIcon from "../../images/xiztur-icon.svg";
import { useTranslation } from "react-i18next";
import Image1 from "../../images/Klopi.jpg";
import Image4 from "../../images/sichqon.jpg";
import Image3 from "../../images/scorpion.jpg";
import Image2 from "../../images/tarakan.jpg";
import Image5 from "../../images/burga.webp";

const XizmatTuri = () => {
  const { t } = useTranslation();
  return (
    <div className="XizmatTuri-container">
      <div className="xiz-tur-title">
        <h1>{t("xiztur-title")}</h1>
      </div>
      <hr />
      <div className="xiz-tur-cards">
        <div
          className="xiz-tur-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className="card-items">
            <h1>{t("xiztur-card1-title")}</h1>
            <p>{t("xiztur-card1-description")}</p>
          </div>
          <div className="card-image-btn">
            <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
            <div className="card-image">
              <img src={Image1} alt="" />
            </div>
          </div>
        </div>
        <div
          className="xiz-tur-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className="card-items">
            <h1>{t("xiztur-card2-title")}</h1>
            <p>{t("xiztur-card2-description")}</p>
          </div>
          <div className="card-image-btn">
          <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
            <div className="card-image">
              <img src={Image2} alt="" />
            </div>
          </div>
        </div>
        <div
          className="xiz-tur-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className="card-items">
            <h1>{t("xiztur-card3-title")}</h1>
            <p>{t("xiztur-card3-description")}</p>
          </div>
          <div className="card-image-btn">
          <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
            <div className="card-image">
              <img src={Image3} alt="" />
            </div>
          </div>
        </div>
        <div
          className="xiz-tur-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className="card-items">
            <h1>{t("xiztur-card4-title")}</h1>
            <p>{t("xiztur-card4-description")}</p>
          </div>
          <div className="card-image-btn">
          <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
            <div className="card-image">
              <img src={Image4} alt="" />
            </div>
          </div>
        </div>
        <div
          className="xiz-tur-card"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <div className="card-items">
            <h1>{t("xiztur-card5-title")}</h1>
            <p>{t("xiztur-card5-description")}</p>
          </div>
          <div className="card-image-btn">
          <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
            <div className="card-image">
              <img src={Image5} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="xiz-tur-cards2">
        <div className="card2-image">
          <img src={Odamlar} alt="odamlar" />
        </div>
        <div className="card2-items">
          <div className="card2-title">
            <img
              src={XizTurIcon}
              alt="Icons"
              data-aos="fade-left"
              className="card2-icon"
            />
            <span data-aos="fade-left">{t("xiztur-form")}</span>
          </div>
          <div className="card2-button" data-aos="fade-left">
            <a href="#contact"><button>{t("xiztur-card-button")}</button></a>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default XizmatTuri;
