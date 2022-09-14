import React from "react";
import "./AboutUs.css";
import person from "../../assets/Images/aboutperson.png";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="aboutus">
        <div className="mx-auto absolute w-full">
          <div className="about-header">
            <div className="city-bc">
              <div className="cites-content">
                <div className="mt-24">
                  <h1 className="city-head-title">{t("aboutUs")}</h1>
                  <p className="city-head-text">{t("ourCompany")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="about-content">
            <div className="about-content-main">
              <h1 className="info_text">{t("informationSite")}</h1>
              <ul>
                <li>{t("newMarket")}</li>
                <li>{t("haveniceTrip")}</li>
                <li>{t("touristDestinations")}</li>
                <li>{t("ourFriend")}</li>
              </ul>
              <img src={person} alt="person" className="" />
              <ul className="mt-5">
                <li>{t("goodTime")}</li>
                <li className="mt-10">{t("discussion")}</li>
              </ul>
              <h2 className="location">Location:</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3035.3286842601674!2d71.72562331539748!3d40.46799297935917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x17743998326cd56a!2zNDDCsDI4JzA0LjgiTiA3McKwNDMnNDAuMSJF!5e0!3m2!1suz!2s!4v1660035881497!5m2!1suz!2s "
                width="1130"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                frameBorder="0"
                title="location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
