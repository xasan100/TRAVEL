import React from "react";
import { Loc } from "../../assets/icon";
import { PhoneIcon } from "../../assets/icon";
import { MessengeIcon } from "../../assets/icon";
import "./Contacts.css";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <div className="mx-auto absolute w-full">
      <div className="contact-header">
        <div className="contact-bc">
          <div className="cites-content">
            <div className="mt-24">
              <h1 className="city-head-title">{t("contact")} </h1>
              <p className="city-head-text">
              {t("connection")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[40px] text-[20px] cites-content">
        <div className="flex-initial w-[450px]">
          <p className="text-justify">
          {t("decentCompany")}
          </p>

          <div className="mt-[80px]">
            <div className="flex">
              <div className="ml-[-6px]">
                <Loc />
              </div>
              <p className="w-[500px] ml-[10px]">
                {t("address")}
              </p>
            </div>
            <div className="flex mt-[10px]">
              <PhoneIcon />
              <p className="w-[500px] ml-[10px]">+998 97 332 22 33, +998 90 580 25 05 </p>
            </div>
            <div className="flex mt-[10px]">
              <MessengeIcon />
              <p className="w-[500px] ml-[13  px]">decenttravel@mail.ru</p>
            </div>
          </div>
        </div>
        <div className="forma">
          <form>
            <div>
              <label htmlFor="">{t("email")}:</label>
              <input type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="">{t("name")}:</label>
              <input type="text" />
            </div>
            <br />
            <div>
              <label htmlFor="">{t("info")}:</label>
              <input type="text" />
            </div>
            <br />
            <button className="bg-orange-600 w-[154px] h-[56px] p-[10px] rounded-lg text-white text-[16px] ml-64">
              {t("request")}
            </button>
          </form>
        </div>
      </div>
      {/* <Footer  /> */}
    </div>
  );
};

export default Contacts;
