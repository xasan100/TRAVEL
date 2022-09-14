import React from "react";
import "./Attractions.css";
import attractionimg1 from "../../assets/image 37.png";
import Footer from "../../Components/footer/Footer";
import Search from "../../Components/search/search";
import { useTranslation } from "react-i18next";

const Attractions = () => {
  const { t } = useTranslation();
  return (
    <div className="mx-auto absolute w-full">
      <div className="acc-header">
        <div className="city-bc">
          <div className="cites-content">
            <div className="mt-24">
              <h1 className="city-head-title">{t("attraction")}</h1>
              <p className="city-head-text">{t("differentDirections")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="attraction-content   flex">
        <div className="w-[816px] text-justify">
          <div className="mt-[20px]">
            <h1 className="text-center font-bold text-[48px]">
              {t("karimovMuseum")}
            </h1>
            <p className=" text-[22px] mt-[10px] ">{t("firstPresident")}</p>
          </div>
          <div className="mt-[30px]">
            <img src={attractionimg1} alt="" />
          </div>
          <div className="mt-[20px]">
            <p className="text-justify text-[22px] mt-[10px]">
              {t("museumExhibits")}
            </p>
            <p className="text-justify text-[22px] mt-[15px]">
              {t("unusuaPpictures")}
            </p>
          </div>
          <div className="mt-[20px]">
            <span className="text-[#F3692E]">Location:</span>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8540.297151184914!2d69.22255379018169!3d41.32406551445359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b19339515f9%3A0xf2d5a0bc680d9bdf!2sWhite%20House%20(Islam%20Karimov)%20Museum!5e0!3m2!1suz!2s!4v1659725453781!5m2!1suz!2s"
                width="816"
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
        <div className="ml-[50px]">
          <div className="mt-[100px]">
            <div className="col-span-4">
              <div className="flex flex-col">
                <Search />
                <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
                  <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
                    <li className="text-[#F3692E] cursor-pointer">
                      Islom Karimov muzeyi
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Location
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Ko‘proq ko‘ring
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Attractions;
