import React from "react";
import "./Xizmatlar.css";
import { useTranslation } from "react-i18next";
import Image1 from "../../images/dizinfeksiya-bakteriya.png"
import Image2 from "../../images/dezinyeksiya-qongiz.png"
import Image3 from "../../images/derazatsiya-sichqon.png"

const Xizmatlar = () => {
  const {t} = useTranslation()
  return (
    <div className="xizmatlar-container" id="xizmatlar">
      <div className="xiz-title">
        <h1>{t("xiz-title")}</h1>
        <p>{t("xiz-description")}</p>
      </div>
      <hr />
      <div className="xiz-cards">
        <div className="xiz-card" data-aos="fade-right">
          <div className="card-image">
            <img src={Image1} alt="Images" />
          </div>
            <div className="card-items">
              <h1>{t("xiz-card1-title")}</h1>
              <p>
                {t("xiz-card1-description")}
              </p>
            </div>
        </div>
        <div className="xiz-card" data-aos="fade-right">
          <div className="card-image">
            <img src={Image2} alt="Images" />
          </div>
            <div className="card-items">
              <h1>
                {t("xiz-card2-title")}
              </h1>
              <p>
                {t("xiz-card2-description")}
              </p>
            </div>
        </div>
        <div className="xiz-card" data-aos="fade-right">
          <div className="card-image">
            <img src={Image3} alt="Images" />
          </div>
            <div className="card-items">
              <h1>
                {t("xiz-card3-title")}
              </h1>
              <p>
                {t("xiz-card3-description")}
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Xizmatlar;
