import React from 'react'
import "./Footer.css"
import FooterLogo from "../../images/logo2.png"
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation()
  return (
    <div className="footer-container">
        <div className="footer-logo">
            <a href="#"><img src={FooterLogo} alt="FooterLogo" /></a>
        </div>
        <div className="footer-cards">
            <div className="footer-card">
                <div className="footer-icon">
                    <a href='https://maps.app.goo.gl/mpbhEEQoxeA2Naw89'><IoLocation className='fot-icon' /></a>
                </div>
                <div className="card-items">
                    <a href="https://maps.app.goo.gl/mpbhEEQoxeA2Naw89" target='_blank'>
                        {t("footer-message-1")}
                    </a>
                </div>
                <div className="card-icon2">
                <a href="#" className='footer-link'><GrLinkNext className="gr-links" /></a>
                </div>
            </div>
            <div className="footer-card">
                <div className="footer-icon">
                    <a href="tel:+998991199933"><FaPhoneAlt className='fot-icon' /></a>
                </div>
                <div className="card-items">
                    <a href="tel:+998991199933">
                    {t("footer-message-2")}
                    </a>
                </div>
                <div className="card-icon2">
                <a href="#" className='footer-link'><GrLinkNext className="gr-links" /></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer