import React from "react";
import "./City.css";
import termiz from "../../assets/Images/termiz.png";
import samarqand from "../../assets/Images/samarqand.png";
import xiva from "../../assets/Images/xiva.png";
import namangan from "../../assets/Images/namangan.png";
import fargona from "../../assets/Images/fargona.png";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";

const City = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="city-container">
        <div className="mx-auto absolute w-full">
          <div className="city-header">
            <div className="city-bc">
              <div className="cites-content">
                <div className="mt-12">
                  <h1 className="city-head-title">{t("touristTowns")}</h1>
                  <p className="city-head-text">{t("suggestionsUs")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="cites-content">
            <div className="city-content-main">
              <h1 className="">{t("worldWtour")}</h1>
              <p>{t("travel")}</p>
              <div className="mt-14 grid grid-cols-4 gap-2 city-cards">
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h2 className="city-title">Samarqand</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={xiva} alt="" />
                  </div>
                  <h2 className="city-title">Xiva</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h2 className="city-title">Namangan</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h2 className="city-title">Farg‘ona</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h2 className="city-title">Namangan</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={termiz} alt="" />
                  </div>
                  <h2 className="card-title">Termiz</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h2 className="city-title">Farg‘ona</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h2 className="city-title">Samarqand</h2>
                </div>
                <div className="card-item">
                  <div className="card-image">
                    <img src={samarqand} alt="" />
                  </div>
                  <h2 className="city-title">Samarqand</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={xiva} alt="" />
                  </div>
                  <h2 className="city-title">Xiva</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={namangan} alt="" />
                  </div>
                  <h2 className="city-title">Namangan</h2>
                </div>{" "}
                <div className="card-item">
                  <div className="card-image">
                    <img src={fargona} alt="" />
                  </div>
                  <h2 className="city-title">Farg‘ona</h2>
                </div>{" "}
              </div>
            </div>
          </div>
          {/* <Footer /> */}
        </div>
      </div>
    </>
  );
};

export default City;
