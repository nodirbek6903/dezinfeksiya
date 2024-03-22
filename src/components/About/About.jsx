import React from "react";
import { BsLightningCharge } from "react-icons/bs";
import { MdHandshake } from "react-icons/md";
import { SlBadge } from "react-icons/sl";
import "./About.css";
import AboutImage from "../../images/odamlar2.webp"
import { useTranslation } from "react-i18next";

const About = () => {
  const {t} = useTranslation()
  return (
    <div className="about-container" id="about">
      <div className="about-title" data-aos="fade-right">
        <h1>{t("about-title")}</h1>
      </div>
      <hr />
      <div className="about-cards" data-aos="fade-right">
        <div className="about-card">
          <BsLightningCharge className="card-icon" />
          <h2 className="card-title">{t("about-items-title")}</h2>
          <p className="card-descr">
          {t("about-items-description")}
          </p>
        </div>
        <div className="about-card">
          <SlBadge className="card-icon" />
          <h2 className="card-title">{t("about-items-title2")}</h2>
          <p className="card-descr">
          {t("about-items-description2")}
          </p>
        </div>
        <div className="about-card">
          <MdHandshake className="card-icon" />
          <h2 className="card-title">{t("about-items-title3")}</h2>
          <p className="card-descr">
          {t("about-items-description3")}
          </p>
        </div>
      </div>
      <div className="about-cards-two">
        <div className="about-card-two" data-aos="fade-left">
          <h1 className="card-title-two" data-aos="fade-left">{t("about-card2-title")}</h1>
          <p>{t("about-card2-description")}</p>
          <a href="tel:+998903646903">
          <button data-aos="fade-left">{t("about-card2-button")}</button>
          </a>
        </div>
        <div className="about-img-container">
          <img src={AboutImage} alt="AboutImage" />
        </div>
      </div>
    </div>
  );
};

export default About;
