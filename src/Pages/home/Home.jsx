import React, { useEffect, useState } from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";
import "./Home.css";
import samarqand from "../../assets/Images/samarqand.png";
import xiva from "../../assets/Images/xiva.png";
import namangan from "../../assets/Images/namangan.png";
import fargona from "../../assets/Images/fargona.png";
import umrah from "../../assets/Images/umrah.png";
import karimov from "../../assets/Images/karimov.png";
import alisher from "../../assets/Images/alisher.png";
import ziyorat from "../../assets/Images/ziyorat.png";
import saroy from "../../assets/Images/saroy.png";
import chorvoq from "../../assets/Images/chorvoq.png";
import haykal from "../../assets/Images/haykal.png";
import samar from "../../assets/Images/samar.png";
import naman from "../../assets/Images/naman.png";
import about1 from "../../assets/Images/about1.png";
import about2 from "../../assets/Images/about2.png";
import about3 from "../../assets/Images/about3.png";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FileIcon, MapIcon, MessengeIcon, PhoneIcon } from "../../assets/icon";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import axios from "axios";
import Aos from "aos";

const SectionStyle = {
  height: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

function Home() {
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [isReady, setIsReady] = useState(null);

  useEffect(() => {
    axios
      .get(`http://46.101.191.246:5000/api/places/sort/:1`)
      .then((res) => {
        setItems(res.data);
        setIsReady(true);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  console.log(items);
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="home">
      <Fullpage>
        <div className="sectionNav">
          <FullpageNavigation style={{ zIndex: "-1" }} />
        </div>
        <FullPageSections>
          <FullpageSection style={{ SectionStyle }}>
            <div className="header_section-one">
              <div className="header-bc">
                <div className="header-content">
                  <p className="first-text">{t("the_best")}</p>
                  <h1 className="main-text">{t("best_travel")}</h1>
                  <p className="last-text">
                    {t("the_decent")}
                    <br />
                    {t("")}
                  </p>
                  <button> {t("turist_city")}</button>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }} className="example_Section">
            <div className="header_section-two">
              <div className="home_cards">
                <h1 className="center-text">{t("turist_city")}</h1>
                <div className="center-text-line" />
                <div className="card_content grid gap-1">
                  <div className="card-item">
                    <div className="card-image">
                      <img src={samarqand} alt="" />
                    </div>
                    {/* link */}
                    <Link to="/detailed">
                      <h1 className="card-title">Samarqand</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={xiva} alt="" />
                    </div>
                    <Link to="/detailed">
                      <h1 className="card-title">Farg'ona</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={xiva} alt="" />
                    </div>
                    <Link to="/detailed">
                      <h1 className="card-title">Buxoro</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={xiva} alt="" />
                    </div>
                    <Link to="/detailed">
                      <h1 className="card-title">Xorazm</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={xiva} alt="" />
                    </div>
                    <Link to="/detailed">
                      <h1 className="card-title">Samarqand</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={namangan} alt="" />
                    </div>
                    <Link to="/detailed">
                      <h1 className="card-title">Toshkent</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={fargona} alt="" />
                    </div>{" "}
                    <Link to="/detailed">
                      <h1 className="card-title">Surhandaryo</h1>
                    </Link>
                  </div>{" "}
                  <div className="card-item">
                    <div className="card-image">
                      <img src={samarqand} alt="" />
                    </div>{" "}
                    <Link to="/detailed">
                      <h1 className="card-title">Samarqand</h1>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_urmrah">
              <div className="home_umrah_content">
                <div className="home_umrah_image">
                  <img src={umrah} alt="" />
                </div>
                <div className="home_urmrah_content_text">
                  <h1 className="home_urmrah_title">{t("umrah_name")}</h1>
                  <p className="home_urmrah_text">{t("umrah_text")}</p>
                  <button className="home_urmrah_button">
                    {" "}
                    <Link to="/umrah">{t("see_all")}</Link>
                  </button>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_carousel">
              <h1 className="center-text">{t("attractions")}</h1>
              <hr className="carousel-text-line" />
              <div className="home_carousel_content">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="carousel-content">
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>{t("karimov")} </h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={alisher} alt="" />
                        </div>
                        <h1>{t("navoiy")} </h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={ziyorat} alt="" />
                        </div>
                        <h1>{t("hazrati_d")} </h1>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={alisher} alt="" />
                        </div>
                        <h1>{t("navoiy")} </h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>{t("navoiy")} </h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={ziyorat} alt="" />{" "}
                        </div>
                        <h1>{t("hazrati_d")} </h1>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_galereya">
              <div className="home_galereya_content">
                <h1 className="center-text_3">{t("gallery")} </h1>
                <hr className="center-text-line_3" />
                <div className="home_galereya_images">
                  <div>
                    <img src={saroy} alt="" />
                    <img src={chorvoq} alt="" />
                  </div>
                  <div>
                    <img src={haykal} alt="" />
                  </div>
                  <div>
                    <img src={samar} alt="" />
                    <img src={naman} alt="" />
                  </div>
                </div>
                <button>{t("see_all")}</button>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_about">
              <h1 className="center-text_4">{t("about_Us")} </h1>
              <hr className="center-text-line_4" />
              <div class="home_about-content">
                <div class="about-image_1">
                  <img src={about1} alt="" />
                </div>
                <div class="about-img">
                  <img src={about2} alt="" />
                  <img src={about3} alt="" />
                </div>
                <div class="about-text">
                  <div>
                    <p>{t("decent_info")}</p>
                    <button>{t("learn_more")} </button>
                  </div>
                </div>
              </div>
            </div>
          </FullpageSection>
          <FullpageSection style={{ SectionStyle }}>
            <div className="home_contact">
              <h1 className="center-text_5">{t("our_contacts")} </h1>
              <hr className="center-text-line_5" />
              <div className="home_contact_content">
                <div className="">
                  <div className="flex">
                    <span>
                      <MapIcon />
                    </span>
                    <p>{t("location")}</p>
                  </div>{" "}
                  <br />
                  <div className="flex">
                    <span>
                      <PhoneIcon />
                    </span>
                    <p>99890 580-25-05 </p>
                  </div>
                </div>
                <div className="home-contect-items">
                  <div className="flex">
                    <span>
                      <MessengeIcon />
                    </span>
                    <p>contact@TourismUmrah.com</p>
                  </div>{" "}
                  <br />
                  <div className="flex">
                    <span>
                      <FileIcon />
                    </span>
                    <p>fax@TourismUmrah.com</p>
                  </div>
                </div>
              </div>
              <button>{t("send_request")} </button>
            </div>
            {/* <Foo  ter /> */}
          </FullpageSection>
        </FullPageSections>
      </Fullpage>
    </div>
  );
}

export default Home;
