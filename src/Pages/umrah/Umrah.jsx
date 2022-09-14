import React, { useState } from "react";
import "./umrah.css";
import umrah from "../../assets/image 1.png";
import rasm1 from "../../assets/Rectangle 2815.png";
import rasm2 from "../../assets/Rectangle 9552.png";
import rasm3 from "../../assets/Rectangle 9553.png";
import rasm4 from "../../assets/Rectangle 22434.png";
import rasm5 from "../../assets/Rectangle 22435.png";
import rasm6 from "../../assets/Rectangle 22436.png";
import rasm7 from "../../assets/rasm7.png";
import rasm8 from "../../assets/rasm8.png";
import rasm9 from "../../assets/rasm9.png";
import Footer from "../../Components/footer/Footer";
import { useTranslation } from "react-i18next";
import Search from "../../Components/search/search";
import { CloseIcon } from "../../assets/icon";
import Modal from "react-modal";
const customStyles = {
  content: {
    position: "inherit",
    margin: "auto",
  },
};
const Umrah = () => {
  const [name, setName] = useState([]);
  const [surName, setSurName] = useState([]);
  const [passport, setPassport] = useState([]);
  const [phone, setPhone] = useState([]);
  const { t } = useTranslation();

  const [modalIsOpen, setIsOpen] = React.useState(false);
  let subtitle;

  function openModal() {
    setIsOpen(true);
  }
  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }
  function closeModal() {
    setIsOpen(false);
  }

  const PathPayme = (e) => {
    e.preventDefault();
    const axios = require("axios");
    const data = JSON.stringify({
      amount: "1000",
      full_name: `${name} ${surName}`,
      pasport_number: passport,
      phone_number: phone,
      return_url: `https://worldglamour.uz/`,
    });

    const config = {
      method: "post",
      url: "http://46.101.191.246:5000/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config).then(
      (response) => {
        if (response.status === 201) {
          window.location.assign(response.data.invoice);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  function openTab() {
    window.open(
      "https://my.click.uz/services/pay?service_id=24635&merchant_id=17174&amount=1000&transaction_param=test"
    );
  }

  return (
    <>
      <div className="w-full h-screen mx-auto  absolute">
        <div className="w-full h-[100vh] bg-zinc-900 flex justify-center items-center ">
          <div className="w-3/6 leading-[96px] text-white text-[70px] font-bold pl-[120px] ">
            <h1>{t("umrah_name")} </h1>
          </div>
          <div className="w-3/6 pl-[10px]">
            <img src={umrah} alt="" />
          </div>
        </div>
        <div className="umrah-content px-[120px] flex">
          <div className="flex-auto w-96 mt-[40px]">
            <div className="">
              <h1 className="text-[48px] font-bold leading-[120%] text-[#0E0E2C] mt-[30px] text-left">
                {t("umra_2022")}
              </h1>
              <div className="flex">
                <p className="font-medium text-[20px] not-italic] text-[#0E0E2C] mt-[25px]">
                  {t("departureDdate")}
                </p>
                <button className="band-btn">Band qilish</button>
              </div>
              <p className="font-medium ml-[610px] w-[320px] h-[32px] text-[18px] not-italic text-[#0E0E2C] mt-[15px]"></p>
              <div className="mt-[20px] font-normal text-[20px] leading-[30px] tracking-normal ">
                {t("umrahPackage")}
              </div>
              <div className="mt-[20px] font-normal text-[20px] leading-[30px] tracking-normal  ">
                {t("wePackages")}
              </div>
              <div className="mt-[50px] font-normal text-[20px] leading-[30px] tracking-normal">
                <span className="text-[#F3692E]">{t("choosePackage")} </span>
                <ul className="umrah_ul ml-[30px] leading-[40px] mt-[10px]">
                  {t("servicePackage")}
                </ul>
              </div>
              <div className="mt-10 font-normal text-[20px] leading-[30px] tracking-normal">
                <p className="text-[#F3692E]">{t("itinerary")} </p>
                <span className="mt-10">{t("infoPackage")}</span>
                <div className="w-[1030px] mt-10">
                  <span className="text-[#F3692E]">{t("whatnCluded")} </span>
                  <ul className="umrah_ul ml-[30px] leading-[40px] mt-5">
                    <li>{t("touristVisas")}</li>
                    <li>{t("returnFlights")}</li>
                    <li>{t("hotelStar")}</li>
                    <li>{t("hotelConrad")}</li>
                    <li>{t("speedRailway")}</li>
                    <li>{t("graupLeader")} </li>
                    <li>{t("breakfast")}</li>
                    <li>{t("ziyarahTrips")}</li>
                  </ul>
                </div>
                <div className="">
                  <span className="text-[#F3692E]">{t("hotels")} </span>
                  <ul className="mt-[15px]">
                    <li>{t("al-MadinahHotel")}</li>
                  </ul>
                  <p className="mt-[20px]">{t("largesHhotel")}</p>
                </div>
              </div>
            </div>
            <div className="flex mt-10">
              <div className="">
                <img src={rasm1} className="w-[320px] h-[260px]" alt="" />
              </div>
              <div className="ml-[40px]">
                <img src={rasm2} className="w-[320px] h-[260px]" alt="" />
              </div>
              <div className="ml-[40px]">
                <img src={rasm3} className="w-[320px] h-[260px]" alt="" />
              </div>
            </div>
            <div className="mt-[20px] font-normal text-[20px]">
              <p>{t("al-MadinahHotel")}</p>
              <p className="mt-[20px]">{t("largesHhotel")}</p>
            </div>
            <div className="flex mt-[30px]">
              <div className="">
                <img src={rasm4} className="w-[320px] h-[260px]" alt="" />
              </div>
              <div className="ml-[40px]">
                <img src={rasm5} className="w-[320px] h-[260px]" alt="" />
              </div>
              <div className="ml-[40px]">
                <img src={rasm6} className="w-[320px] h-[260px]" alt="" />
              </div>
            </div>
            <div className="mt-[30px]">
              <span className="text-[#F3692E]">Price (per person):</span>
              <div className="w-[1030px] mt-[40px] border-black border-[1px] rounded-[10px]">
                <div className="flex items-center ml-[50px]">
                  <img src={rasm7} className="hotel_img" alt="" />
                  <span className="text-[25px] ml-[50px]">
                    <h3>Double Occupancy</h3>
                    <p>£1595</p>
                  </span>
                </div>
                <hr className="w-[970px] ml-[25px] border-black border-[0.5px] " />
                <div className="flex items-center ml-[50px]">
                  <img src={rasm8} className="hotel_img" alt="" />
                  <span className="text-[25px] ml-[50px]">
                    <h3>Double Occupancy</h3>
                    <p>£1595</p>
                  </span>
                </div>
                <hr className="w-[970px] ml-[25px] border-black border-[0.5px] " />
                <div className="flex items-center ml-[50px]">
                  <img src={rasm9} className="hotel_img" alt="" />
                  <span className="text-[25px] ml-[50px]">
                    <h3>Double Occupancy</h3>
                    <p>£1595</p>
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[30px] font-normal text-[20px]">
              <span className="text-[#F3692E] mt-[10px]">{t("howbBook")}</span>
              <p className="mt-[10px]">{t("weRequire")} </p>
              <ul className="umrah_ul  ml-[20px] mt-[20px]">
                <li>{t("paymentService")}</li>
              </ul>
              <ul className="umrah_ul  ml-[20px] mt-[30px]">
                <li>Account Name: ACCOUNT UMRAH</li>
                <li>Account Number: 930006644</li>
                <li>Reference: Please insert your postcode</li>
              </ul>
            </div>
          </div>
          <div className="mt-[40px]">
            <div className="col-span-4">
              <div className="flex flex-col">
                <Search />
                <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
                  <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
                    <li className="text-[#F3692E] cursor-pointer">
                      Nima uchun bu paketni tanlaysiz?
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Marshrut
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Viza
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Nima kiradi:
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Mehmonxonalar
                    </li>
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Narxi (odam boshiga)
                    </li>{" "}
                    <li className="hover:text-[#F3692E] cursor-pointer">
                      Qanday qilib bron qilish
                    </li>
                  </ul>
                </div>
                <button
                  className="py-[18px] w-[270px] mt-[32px] px-[32px] bg-[#F36326] rounded-lg not-italic font-semibold text-base text-center text-white"
                  onClick={openModal}
                >
                  Buyurtma qilish
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Moda  l"
        id="modal-container"
      >
        <div className="ml-[-20px] justify-center ">
          <div className="ml-[370px]">
            <div style={{ cursor: "pointer" }} onClick={closeModal}>
              <CloseIcon />
            </div>
          </div>
          <div className="mt-[-20px]">
            <h1 className="text-center">Buyurtma qilish</h1>
            <form onSubmit={(e) => PathPayme(e)}>
              <div>
                <label htmlFor="name">Ism</label> <br />
                <input
                  type="text"
                  placeholder="Ism"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>{" "}
              <div>
                <label htmlFor="name">Familiyasi</label> <br />
                <input
                  type="text"
                  placeholder="Familiyasi"
                  value={surName}
                  onChange={(e) => setSurName(e.target.value)}
                />
              </div>{" "}
              <div>
                <label htmlFor="name">Passport seria raqam</label> <br />
                <input
                  type="text"
                  placeholder="Passport seria raqam"
                  value={passport}
                  onChange={(e) => setPassport(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="name">Telefon raqami</label> <br />
                <input
                  type="text"
                  placeholder="Telefon raqami"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>{" "}
              <>
                <button onClick={closeModal}>Bekor qilish</button>
                <button onClick={openTab} className="submit">
                  Buyurtma qilish
                </button>
              </>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Umrah;
