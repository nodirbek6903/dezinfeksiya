import React, { useState } from "react";
import "./Faq.css";
import { IoArrowDownOutline, IoArrowUpOutline } from "react-icons/io5";
import FaqImage from "../../images/rasm-about.webp"
import { useTranslation } from "react-i18next";

const Faq = () => {
  const [firstname,setFirstname] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")

  const {t} = useTranslation()

  const handleFirstname = (e) => {
    setFirstname(e.target.value)
  }
  const handlePhoneNumber = (e) => {
    setPhoneNumber(e.target.value)
  }

  const telegram_bot_id = "6508105643:AAHzhpmovmZQXqCsdXX8XehXbKmB0lL9KzA";
  const chat_id = 5716140595

  const messageText = `Ismi: ${firstname}\nPhoneNumber:${phoneNumber}`;

  const sendTelegram = () => {
    fetch(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
      method:"POST",
      headers: {
        "Content-Type": "application/json",
        "cache-control":"no-cache",
      },
      body: JSON.stringify({
        chat_id:chat_id,
        text:messageText,
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendTelegram()
    setFirstname("")
    setPhoneNumber("")
  }

  const faqItems = [
    {
      id: 1,
      question: t("faq-question-1"),
      answer:
      t("faq-answer-1"),
    },
    {
      id: 2,
      question: t("faq-question-2"),
      answer:
      t("faq-answer-2"),
    },
    {
      id: 3,
      question: t("faq-question-3"),
      answer:
      t("faq-answer-3"),
    },
  ];

  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="faq-container" id="faq">
      <div className="faq">
        <div className="faq-title">
          <h1>
            {t("faq-title")}
          </h1>
        </div>
        <div className="faq-cards">
          {faqItems.map((item) => (
            <div className="faq-card" key={item.id}>
              <div className="faq-questions" onClick={() => handleToggle(item.id)}>
                <h2>{item.question}</h2>
                <div className="icons" >
                  {openId === item.id ? (
                    <IoArrowUpOutline className="icon" />
                  ) : (
                    <IoArrowDownOutline className="icon" />
                  )}
                </div>
              </div>
              {openId === item.id && (
                <div className="faq-answers">
                  <p>{item.answer}</p>
                </div>
              )}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <div className="faq-cards2">
        <form onSubmit={handleSubmit} className="faq-card2">
            <div className="faq-title2">
                <h2>
                  {t("faq-form-title")}
                </h2>
            </div>
            <div className="faq-inputs2">
                <input type="text" name="name" placeholder={t("faq-form-placeholder")} value={firstname} onChange={handleFirstname} />
                <input type="text" name="number" placeholder="+998-90-123-45-67" value={phoneNumber} onChange={handlePhoneNumber} />
            </div>
            <div className="faq-buttons2">
                <button>{t("faq-form-button")}</button>
            </div>
        </form>
        <div className="faq-image2">
            <img src={FaqImage} alt="FaqImage" />
        </div>
      </div>
      <hr />
    </div>
    
  );
};

export default Faq;
