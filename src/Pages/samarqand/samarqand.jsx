import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import karimov from "../../assets/Images/karimov.png";
import alisher from "../../assets/Images/alisher.png";
import ziyorat from "../../assets/Images/ziyorat.png";
import Search from "../../Components/search/search";
import Swager1 from "../../assets/footer/swagerReg1.png";
import Swager2 from "../../assets/footer/swagerReg2.png";
import Location1 from "../../assets/footer/location1.png";
import Termiz1 from "../../assets/footer/termiz.png";
import Xiva from "../../assets/footer/xiva.png";
import Nmangan from "../../assets/footer/namangan.png";
import Fargona from "../../assets/footer/farg`ona.png";
import Swager3 from "../../assets/footer/swagerReg3.png";

import img from "../../assets/Images/sam.jpg";
import "./samarqand.css";
import { useTranslation } from "react-i18next";
import Modal from "react-modal";
import { CloseIcon } from "../../assets/icon";
import InputMask from "react-input-mask";
import axios from "axios";
import { Link } from "react-router-dom";

const customStyles = {
  content: {
    position: "inherit",
    margin: "auto",
  },
};
const Samarqand = () => {
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
      <div className="samarqand-container">
        <div className="mx-auto absolute w-full">
          <div className="city-header">
            <div className="city-bc">
              <div className="cites-content">
                <div className="mt-12">
                  <h1 className="city-head-title">Samarqand</h1>
                  <p className="city-head-text">
                    Madaniyat chorrahasi,Eʼtiborga molik joylarni, Decent Hones
                    Travel topishingiz mumkin!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="cites-content">
            <div className="samarqand-box">
              <div>
                <h1 className="samarqand-h1">Samarqand sayohati</h1>
                <div className="samarqand-flex">
                  <div>
                    <p>7 - 10  August 2022</p>
                    <p>Tour Code: SAMARKAND22</p>
                  </div>
                  <div className="tetx-box-saqriq">
                    <p className="text_sariq">765 000 So'm</p>
                    <p>Bir kishi uchun</p>
                  </div>
                </div>
                <div> <br />
                  <h5 className="samarqand-h5">Samarqand sayohati haqida</h5>

                  <div className="samarqand-flex">
                    <ul>
                      <li>Sayohat yo‘nalishi: </li>
                      <li>Davomiyligi: </li>
                    </ul>

                    <div>
                      <p className="text_sariq">Farg‘ona - Toshkent - Chorvoq</p>
                      <p className="text_sariq">3 kun/ 2 kecha</p>
                    </div>
                  </div>
                  <div>
                    <h5 className="text_sariq">Takliflar</h5>
                    <div className="samarqand-flex">
                      <div>
                        <p>1 kishilik uchun:</p>
                        <p>10 kishilik uchun:</p>
                        <p>10 kishilik uchun:</p>
                      </div>
                      <div className="text_sariq">
                        <p>1 500 000 so‘m</p>
                        <p>1 300 000 so‘m</p>
                        <p>200 000 so‘m</p>
                      </div>
                    </div>
                  </div>
                  <br />
                  <div className="samarqand-flex">
                    <div>
                      <p>Imtiyozlar:</p>
                    </div>
                    <div style={{ width: '40%' }}>
                      45 kishilik guruh uchun 2 ta bepul sayohatnoma taqdim etiladi. 45 kishilik guruh uchun 2 ta bepul sayohatnoma taqdim etiladi
                    </div>
                  </div>

                </div>
                <div>
                </div>
              </div>
              <div className="col-span-4">
                <div className="flex flex-col">
                  <Search />
                  <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
                    <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Samarqand sayohati
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Shahar haqida
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Eng mashhur joylari
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Samarqand haqida video
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Iqlimi
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Oshxonalar
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Tarixi
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        Location
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
            {/* sayohat-reja boshlandi */}
            <div  >
              <div>
                <h5 className="samarqand-flex-derction samarqand-h5">Sayohat rejasi:</h5>
              </div>
              <div>
                <div className="samarqand-flex-derction width-1">
                  <div>
                    <p><p>7 August</p>
                      Toshkentdan Samarqand avtobuslari orqali jo’nab ketish Toshkentdan Samarqand avtobuslari orqali jo’nab ketish </p>
                  </div>

                  <div>
                    <p><p>8 August</p>
                      Toshkentdan Samarqand avtobuslari orqali jo’nab ketish Toshkentdan Samarqand avtobuslari orqali jo’nab ketish  </p>
                  </div>
                  <div>
                    <p>
                      <p>9 August</p>
                      Toshkentdan Samarqand avtobuslari orqali jo’nab ketish Toshkentdan Samarqand   </p>
                  </div>
                  <div className="width-1">
                    <p><p>10 August</p>
                      Toshkentdan Samarqand avtobuslari orqali jo’nab ketish Toshkentdan Samarqand   </p>
                  </div>
                </div>
              </div>
              <div className="samarqand-flex-derction">
                <h5 className="samarqand-h5">Narxga kiritilgan:</h5>
                <ul>
                  <li className="width-1">Aeroport-mehmonxona-aeroport guruh bo‘lib transferi
                    Nonushtalarni o‘z ichiga oluvchi mehmonxonada 3 kecha yashash
                    Guruh bo‘lib piyoda sayohat</li>
                </ul>
              </div>
              <div className="samarqand-flex-derction">
                <h5 className="samarqand-h5">Narxga kiritilmagan:</h5>
                <ul>
                  <li className="width-1">Avtobus (Kattalar 270.000 so‘mdan boshlab; Bolalar 4.055.000 so‘mdan boshlab)
                    Tibbiy sug‘urta (+COVID-19 kiritilgan)  sayohat davrida 1 kishi uchun 35.000 so‘m (oilalarga chegirmalar taqdim qilinadi!)
                    Firma xizmatlari 1 kishi uchun 200 000 so‘m
                    Shaxsiy xarajatlar</li>
                </ul>
              </div>
              <br />
              <h1 className="samarqand-h1 samarqand-flex-derction">Samarqand - madaniyat chorrahasi</h1>
              <div className="width-1 samarqand-flex-derction">
                <p>Dunyoning eng buyuk shoir va faylasuflari uni ruh bog'i, sharq gavhari, dunyo ko'zgusi va hatto yer yuzi deb atamaganlari bilan, ular hamma narsani tasvirlay olmadilar. bu go'zal shaharning go'zalligi va boyligi.</p>
              </div>
              <br />
              <div>
                <img className="img-1" src={img} alt="" />
                <p className="samarqand-flex-derction">Samarqandni haqiqatdan ham betakror shahar deyish mumkin!</p>
              </div>
              <div>
                <br />
                <h4 className="text_sariq samarqand-flex-derction">Eng mashhur joylari</h4>
                <br />

                <div className="width-1 samarqand-flex-derction" ><p>Samarqandning madaniy merosi juda katta, shahar ko'p asrlar davomida Buyuk Ipak yo'lining asosiy markazi bo'lib kelgan.

                  21-asr boshida shahar “Samarqand – madaniyatlar chorrahasi” nomi bilan YuNESKOning Butunjahon merosi roʻyxatiga kiritilgan!

                  Shaharga tashrif buyurganingizda, bu erda joylashgan tarixiy yodgorliklar soni sizni hayratda qoldiradi, ammo biz sizga albatta ko'rishga arziydigan eng mashhur diqqatga sazovor joylarni ko'rsatishga harakat qilamiz!</p><br />

                  <p>    ✔️ Bibixonim masjidi va maqbarasi</p>

                  <p> ✔️ Shaxi Zinda nekropoli</p>

                  <p>✔️ Gur Amir maqbarasi</p>

                  <p>     ✔️ Registon maydoni</p>

                  <p>✔️ Qadimgi Afrosiyob manzilgohi</p>

                  <p> ✔️ Ruxobod maqbarasi</p>

                  <p>✔️ Imom Al-Buxoriy yodgorlik majmuasi</p>
                </div>
                <br />
                <div className="samarqand-flex swager-samrqand  ">
                  <img className="swager-samrqand1" src={Swager1} alt="" />
                  <img className="swager-samrqand1" src={Swager2} alt="" />
                  <img className="swager-samrqand1" src={Swager3} alt="" />

                </div>
                <br />
                <p className="text_sariq samarqand-flex-derction">Samarqand haqida video</p>
                <br />
                <iframe className="samarqand-flex-derction" frameborder="0"
                  width="90%%" height="315" src="https://www.youtube.com/embed/1feAEm1EnSI" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                ></iframe>

              </div>
              <div>
                <div>
                  <p className="text_sariq ">Iqlimi</p>
                  <p className="width-1 samarqand-flex-derction">Samarqand iqlimi oʻziga xos mavsumiylikka ega. Qishlari odatda yumshoq va harorat kamdan-kam hollarda 0 ° C dan pastga tushadi. Chunki o'tkir sovuqlar juda kam uchraydi va asosan kechasi. Bu yerda yoz juda issiq, shuning uchun siz bilan shlyapa va ko'zoynak olib kelishingizga ishonch hosil qiling.</p>
                  <br />
                  <br />
                  <p className="text_sariq samarqand-flex-derction">Oshxonalar</p>
                  <br />
                  <p className="width-1 samarqand-flex-derction">Aksariyat viloyatlarimizda bo‘lgani kabi Samarqandda ham asosiy taom palov hisoblanadi. Bu turdagi palov, xuddi Buxoro palovi kabi, pishirish vaqtida aralashtirilmaydi, bu esa palovga o‘ziga xos parhezlik sifatini beradi. Aslida, bu parhez har bir kishi qancha sabzi va go'sht qo'yishni tanlashi mumkin. Palovdan tashqari turli kaboblar, manti va ayniqsa tortlar mashhur! Samarqand tortlari haqida rivoyatlar bor, chunki ular xohlagancha saqlanadi, qotib qolmaydi, mog‘or bo‘lmaydi. Rivoyatlardan birida aytilishicha, bir Buxoro amiri samarqand pishiriqlarini juda yaxshi ko‘rar edi, shuning uchun uni doimo unga olib kelishni buyurgan. Lekin bir kuni har safar buyurtmasini kutishdan charchagach, ularni Buxoroda yasashni qanday boshlash haqida o‘yladi. «Balki un Samarqanddan olib kelarmiz», deb o'yladi u. Lekin tortlar ish bermadi. "Unda siz mahalliy suv olib kelishingiz kerak." Ammo yana, muvaffaqiyatsizlik. “Ehtimol, loyda ham shundaydir! Samarqand loyini olib kelib, undan tandir qilish kerak!”. Natija avvalgidek qoldi. "Balki bu ustalardir? Samarqandlik usta kerak!”. Lekin samarqandlik usta ham bu ta’mni Buxoroda takrorlay olmadi. Shundan so‘ng amir urinishlardan voz kechib, Samarqanddan o‘zi yoqtirgan noz-ne’matlarni olib kelishda davom etadi.

                    Samarqand bozorlarida har qanday ta’mga mos turli xil meva, sabzavotlar va yong‘oqlarni ham uchratish mumkin. Oʻzbek oshxonasi haqida batafsil maʼlumotni ushbu havola orqali oʻqishingiz mumkin.</p>
                  <Swiper
                    slidesPerView={3}
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
                    <div className="">
                      <SwiperSlide>
                        <div className="">
                          <div className="">
                            <img src={karimov} alt="" />
                          </div>
                          <h1>Islom Karimov muzeyi</h1>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <div className="">
                            <img src={alisher} alt="" />
                          </div>
                          <h1>Alisher Navoiy teatri</h1>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="">
                          <div className="">
                            <img src={ziyorat} alt="" />
                          </div>
                          <h1>Hazrati Dovud ziyoratgohi</h1>
                        </div>
                      </SwiperSlide>{" "}
                      <SwiperSlide>
                        <div className="carousel-item">
                          <div className="carousel_image">
                            <img
                              className="w-[260px] h-[260px]"
                              src={alisher}
                              alt=""
                            />
                          </div>
                          <h1>Alisher Navoiy teatri</h1>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="carousel-item">
                          <div className="carousel_image">
                            <img src={karimov} alt="" />
                          </div>
                          <h1>Islom Karimov muzeyi</h1>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="carousel-item">
                          <div className="carousel_image">
                            <img src={ziyorat} alt="" />{" "}
                          </div>
                          <h1>Hazrati Dovud ziyoratgohi</h1>
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </div>



                <Swiper
                  breakpoints={{
                    // when window width is >= 640px
                    640: {
                      width: 640,
                      slidesPerView: 1,
                    },

                    400: {
                      width: 400,
                      slidesPerView: 1,
                    },
                    // when window width is >= 768px
                    768: {
                      width: 768,
                      slidesPerView: 5,
                    },
                    630: {
                      width: 630,
                      slidesPerView: 1,
                    },

                  }}
                  slidesPerView={3}
                  spaceBetween={20}
                  slidesPerGroup={1}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  // pagination={{
                  //   clickable: true,
                  // }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper "
                ><div className="samarqand-flex swager-samrqand">
                    <SwiperSlide>
                      <div>
                        <img src={Swager1} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>   <img src={Swager2} alt="" />
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div>
                        <img src={Swager3} alt="" />
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>


                <Swiper
                  slidesPerView={3}
                  spaceBetween={30}
                  slidesPerGroup={3}
                  loop={true}
                  loopFillGroupWithBlank={true}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Pagination, Navigation]}
                  className="mySwiper"
                >
                  <div className="">
                    <SwiperSlide>
                      <div className="">
                        <div className="">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>Islom Karimov muzeyi</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <div className="">
                          <img src={alisher} alt="" />
                        </div>
                        <h1>Alisher Navoiy teatri</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="">
                        <div className="">
                          <img src={ziyorat} alt="" />
                        </div>
                        <h1>Hazrati Dovud ziyoratgohi</h1>
                      </div>
                    </SwiperSlide>{" "}
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img
                            className="w-[260px] h-[260px]"
                            src={alisher}
                            alt=""
                          />
                        </div>
                        <h1>Alisher Navoiy teatri</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={karimov} alt="" />
                        </div>
                        <h1>Islom Karimov muzeyi</h1>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="carousel-item">
                        <div className="carousel_image">
                          <img src={ziyorat} alt="" />{" "}
                        </div>
                        <h1>Hazrati Dovud ziyoratgohi</h1>
                      </div>
                    </SwiperSlide>
                  </div>
                </Swiper>
                <div>
                  <h5 className="text_sariq samarqand-flex-derction"> Tarixi</h5>
                  <p className="samarqand-flex-derction">
                    Samarqandni faqat uning hududida joylashgan zamonlar va turli madaniyatlar uyg'unligi bilan ko'rish va abadiy maftun etish mumkin. Samarqand dunyoning Rim va Nankin kabi qadimiy poytaxtlari bilan tengdosh ekanini bilasizmi? Ha ha! Shahar taxminan 2750 yil muqaddam paydo bo'lgan va bu unga nafaqat Markaziy Osiyo, balki dunyoning eng qadimiy shaharlaridan biri deb nomlanish huquqini beradi. Shahar gullab-yashnashi Amir Temur (Temur) va uning avlodlari davrida eng yuqori cho‘qqiga chiqdi.
                  </p>
                  <br />
                  <div className="samarqand-flex swager-samrqand  ">
                    <img className="swager-samrqand1" src={Swager1} alt="" />
                    <img className="swager-samrqand1" src={Swager2} alt="" />
                    <img className="swager-samrqand1" src={Swager3} alt="" />
                  </div>
                  <p className="width-1 samarqand-flex-derction">O‘shanda Samarqand uning qudratli saltanatining poytaxtiga aylandi. Temur o‘z poytaxtini qanday tanlagani haqida bir rivoyat bor... Tanlov qilish uchun u o‘z qo‘l ostidagilarga barcha shaharlarni kezib, darvozalariga qo‘chqor o‘ljasini osib qo‘yishni buyurgan va bir oy o‘tib shaxsan o‘zi aylanma yo‘lni bosib o‘tgan. Hamma darvozalarda murdalar chirishga ulgurdi, faqat Samarqand darvozalarida u deyarli butkul buzilmagan, hatto qurib qolgan. Buni ko‘rgan Temur: “Bu shahar eng toza havo va sog‘lom yerga ega. Poytaxt shu yerda bo'ladi! Temurning nabirasi Mirzo Ulug‘bek tufayli shahar jahon ilm-fanining markaziga aylandi. Samarqand “Bu hayotda tashrif buyurishga arziydigan 50 shahar” ro‘yxatiga kiritildi.</p>
                </div>
                <div>
                  <p className="text_sariq samarqand-flex samarqand-flex-derction ">Location:</p>
                  <br />
                  <img className="samarqand-flex-derction " src={Location1} alt="" />
                </div>
              </div>
              <div>
                <h1 className="samarqand-h1 text-endh1 samarqand-flex-derction ">Boshqa shaharlar</h1>
                <div className="samarqand-flex swager-samrqand">
                  <img className="swager-samrqand1" src={Termiz1} alt="" />
                  <img className="swager-samrqand1" src={Xiva} alt="" />
                  <img className="swager-samrqand1" src={Nmangan} alt="" />
                  <img className="swager-samrqand1" src={Fargona} alt="" />
                </div>
                <div className="button-end">
                  <button onClick={openTab} className="submit">
                    Buyurtma qilish
                  </button>
                </div>
              </div>
              <div className="footer-end samarqand-flex">
                <div >
                  <h3>Logoipsum</h3>
                  <p>With travala you can experience new travel and the best tourist destinations that we have to offer</p>
                </div>
                <div>
                  <h3>Logoipsum</h3>
                  <p>With travala you can experience new travel and the best tourist destinations that we have to offer</p>
                </div>
                <div>
                  <h3>Services</h3>
                  <p>With travala you can experience new travel and the best tourist destinations that we have to offer</p>
                </div>
                <div>
                  <h3>About</h3>
                  <p>With travala you can experience new travel and the best tourist destinations that we have to offer</p>
                </div>
              </div>
              <div className="imgfooter">  </div>
            </div>
            <div className="flex items-center justify-center mt-[48px]"></div>
          </div>
        </div>
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

export default Samarqand;

// <div className="grid grid-cols-12 gap-[24px] mt-12">
            //   <div className="col-span-8">
            //     <p className="not-italic font-bold text-5xl text-[#0E0E2C]">
            //       Samarqand sayohati
            //     </p>
            //     <div className="flex items-center mt-4">
            //       <div>
            //         <p className="text">7 - 10 August 2022</p>
            //         <p className="text">Tour Code: SAMARKAND22</p>
            //       </div>
            //       <div className="flex">
            //         <div className="ml-8">
            //           <p className="text leading-8 font-bold text-[#F3692E]">
            //             765 000 So‘m
            //           </p>
            //           <p className="text">Bir kishi uchun</p>
            //         </div>
            //       </div>
            //     </div>
            //     <p className="not-italic font-semibold text-2xl mb-4 leading-8 text-black mt-[40px]">
            //       Samarqand sayohati haqida:
            //     </p>
            //     <div className="flex items-center">
            //       <div>
            //         <p className="text mb-2">Sayohat yo‘nalishi: </p>
            //         <p className="text mb-2">Davomiyligi: </p>
            //       </div>
            //       <div className="ml-[100px]">
            //         <p className="text text-[#F3692E]">
            //           Farg‘ona - Toshkent - Chorvoq
            //         </p>
            //         <p className="text text-[#F3692E]">3 kun/ 2 kecha</p>
            //       </div>
            //     </div>
            //     <p className="not-italic font-semibold text-2xl leading-8 text-black  mt-[24px] mb-4">
            //       Takliflar:
            //     </p>
            //     <div className="flex items-center">
            //       <div className="flex flex-col gap-2">
            //         <p className="text">1 kishilik uchun:</p>
            //         <p className="text">1 kishilik uchun:</p>
            //         <p className="text">1 kishilik uchun:</p>
            //       </div>
            //       <div className="ml-[130px] flex flex-col gap-2 text-[#F3692E] font-medium">
            //         <p className="text">1 500 000 so‘m</p>
            //         <p className="text">1 500 000 so‘m</p>
            //         <p className="text">1 500 000 so‘m</p>
            //       </div>
            //     </div>
            //     <div className="flex mt-[30px]">
            //       <p className="not-italic font-semibold text-2xl leading-8 text-black ">
            //         Imtiyozlar:
            //       </p>
            //       <p className="ml-[170px] not-italic font-normal text-2xl leading-8 text-gray-900">
            //         45 kishilik guruh uchun 2 ta bepul sayohatnoma taqdim
            //         etiladi. 45 kishilik guruh uchun 2 ta bepul sayohatnoma
            //         taqdim etiladi
            //       </p>
            //     </div>
            //     <div className="mt-[40px]">
            //       <p className="not-italic font-semibold text-2xl leading-8 text-black mb-4">
            //         Sayohat rejasi:
            //       </p>
            //       <div className="not-italic font-normal text-2xl leading-8 text-black">
            //         <p className="mb-4">
            //           7 August Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish
            //         </p>
            //         <p className="mb-4">
            //           7 August Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish
            //         </p>
            //         <p className="mb-4">
            //           7 August Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish
            //         </p>
            //         <p className="mb-4">
            //           7 August Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish Toshkentdan Samarqand avtobuslari orqali jo’nab
            //           ketish
            //         </p>
            //       </div>
            //       <p className="not-italic font-semibold text-2xl leading-8 text-black mb-4">
            //         Narxga kiritilgan:
            //       </p>
            //       <ul className="not-italic font-normal text-2xl leading-8 text-black">
            //         <li className="mb-4">
            //           * Aeroport-mehmonxona-aeroport guruh bo‘lib transferi
            //         </li>
            //         <li className="mb-4">
            //           * Nonushtalarni o‘z ichiga oluvchi mehmonxonada 3 kecha
            //           yashash
            //         </li>
            //         <li className="mb-4">* Guruh bo‘lib piyoda sayohat</li>
            //       </ul>
            //     </div>
            //     <p className="not-italic font-semibold text-2xl leading-8 text-black">
            //       Narxga kiritilmagan:
            //     </p>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black mt-4">
            //       Avtobus (Kattalar 270.000 so‘mdan boshlab; Bolalar 4.055.000
            //       so‘mdan boshlab) Tibbiy sug‘urta (+COVID-19 kiritilgan)
            //       sayohat davrida 1 kishi uchun 35.000 so‘m (oilalarga
            //       chegirmalar taqdim qilinadi!) Firma xizmatlari 1 kishi uchun
            //       200 000 so‘m Shaxsiy xarajatlar
            //     </p>
            //     <p className="not-italic font-bold text-[45px] text-gray-900 mt-12">
            //       Samarqand - madaniyat chorrahasi
            //     </p>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black">
            //       Dunyoning eng buyuk shoir va faylasuflari uni ruh bog'i, sharq
            //       gavhari, dunyo ko'zgusi va hatto yer yuzi deb atamaganlari
            //       bilan, ular hamma narsani tasvirlay olmadilar. bu go'zal
            //       shaharning go'zalligi va boyligi.
            //     </p>
            //     <img className="my-[32px]" src={img} alt="sam photos" />
            //     <p className="not-italic font-normal text-2xl leading-8 text-black">
            //       Samarqandni haqiqatdan ham betakror shahar deyish mumkin!
            //     </p>
            //     <p className="mt-[48px] not-italic font-semibold text-2xl leading-8 text-orange-600">
            //       Eng mashhur joylari
            //     </p>
            //     <div className="not-italic font-normal text-2xl leading-8 text-black">
            //       <p className="mb-7 mt-5">
            //         Samarqandning madaniy merosi juda katta, shahar ko'p asrlar
            //         davomida Buyuk Ipak yo'lining asosiy markazi bo'lib kelgan.
            //       </p>
            //       <p className="mb-7">
            //         Samarqandning madaniy merosi juda katta, shahar ko'p asrlar
            //         davomida Buyuk Ipak yo'lining asosiy markazi bo'lib kelgan.
            //       </p>
            //       <p className="mb-7">
            //         Samarqandning madaniy merosi juda katta, shahar ko'p asrlar
            //         davomida Buyuk Ipak yo'lining asosiy markazi bo'lib kelgan.
            //       </p>
            //       <p className="mb-7">
            //         Samarqandning madaniy merosi juda katta, shahar ko'p asrlar
            //         davomida Buyuk Ipak yo'lining asosiy markazi bo'lib kelgan.
            //       </p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p className="mb-7">✔️ Bibixonim masjidi va maqbarasi</p>
            //       <p>✔️ Bibixonim masjidi va maqbarasi</p>
            //     </div>
            //     <div>
            //       <Swiper
            //         slidesPerView={3}
            //         spaceBetween={30}
            //         slidesPerGroup={3}
            //         loop={true}
            //         loopFillGroupWithBlank={true}
            //         // pagination={{
            //         //   clickable: true,
            //         // }}
            //         navigation={true}
            //         modules={[Pagination, Navigation]}
            //         className="mySwiper"
            //       >
            //         <div className="">
            //           <SwiperSlide>
            //             <div className="">
            //               <div className="">
            //                 <img src={karimov} alt="" />
            //               </div>
            //               <h1>Islom Karimov muzeyi</h1>
            //             </div>
            //           </SwiperSlide>
            //           <SwiperSlide>
            //             <div className="">
            //               <div className="">
            //                 <img src={alisher} alt="" />
            //               </div>
            //               <h1>Alisher Navoiy teatri</h1>
            //             </div>
            //           </SwiperSlide>
            //           <SwiperSlide>
            //             <div className="">
            //               <div className="">
            //                 <img src={ziyorat} alt="" />
            //               </div>
            //               <h1>Hazrati Dovud ziyoratgohi</h1>
            //             </div>
            //           </SwiperSlide>{" "}
            //           <SwiperSlide>
            //             <div className="carousel-item">
            //               <div className="carousel_image">
            //                 <img
            //                   className="w-[260px] h-[260px]"
            //                   src={alisher}
            //                   alt=""
            //                 />
            //               </div>
            //               <h1>Alisher Navoiy teatri</h1>
            //             </div>
            //           </SwiperSlide>
            //           <SwiperSlide>
            //             <div className="carousel-item">
            //               <div className="carousel_image">
            //                 <img src={karimov} alt="" />
            //               </div>
            //               <h1>Islom Karimov muzeyi</h1>
            //             </div>
            //           </SwiperSlide>
            //           <SwiperSlide>
            //             <div className="carousel-item">
            //               <div className="carousel_image">
            //                 <img src={ziyorat} alt="" />{" "}
            //               </div>
            //               <h1>Hazrati Dovud ziyoratgohi</h1>
            //             </div>
            //           </SwiperSlide>
            //         </div>
            //       </Swiper>
            //     </div>
            //     <p className="not-italic font-semibold text-2xl leading-8 text-orange-600 mb-4">
            //       Samarqand haqida video
            //     </p>
            //     <iframe
            //       width="100%"
            //       height="358px"
            //       src="https://www.youtube.com/embed/oovCaxhMAJU"
            //       title="YouTube video player"
            //       frameBorder="0"
            //       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            //       allowFullScreen
            //     ></iframe>
            //     <p className="mt-[48px] not-italic font-semibold text-2xl leading-8 text-orange-600">
            //       Iqlimi
            //     </p>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black mt-4">
            //       Samarqand iqlimi oʻziga xos mavsumiylikka ega. Qishlari odatda
            //       yumshoq va harorat kamdan-kam hollarda 0 ° C dan pastga
            //       tushadi. Chunki o'tkir sovuqlar juda kam uchraydi va asosan
            //       kechasi. Bu yerda yoz juda issiq, shuning uchun siz bilan
            //       shlyapa va ko'zoynak olib kelishingizga ishonch hosil qiling.
            //     </p>
            //     <p className="not-italic font-semibold text-2xl leading-8 text-orange-600 mt-[48px]">
            //       Oshxonalar
            //     </p>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black mt-4">
            //       Aksariyat viloyatlarimizda bo‘lgani kabi Samarqandda ham
            //       asosiy taom palov hisoblanadi. Bu turdagi palov, xuddi Buxoro
            //       palovi kabi, pishirish vaqtida aralashtirilmaydi, bu esa
            //       palovga o‘ziga xos parhezlik sifatini beradi. Aslida, bu
            //       parhez har bir kishi qancha sabzi va go'sht qo'yishni tanlashi
            //       mumkin. Palovdan tashqari turli kaboblar, manti va ayniqsa
            //       tortlar mashhur! Samarqand tortlari haqida rivoyatlar bor,
            //       chunki ular xohlagancha saqlanadi, qotib qolmaydi, mog‘or
            //       bo‘lmaydi. Rivoyatlardan birida aytilishicha, bir Buxoro amiri
            //       samarqand pishiriqlarini juda yaxshi ko‘rar edi, shuning uchun
            //       uni doimo unga olib kelishni buyurgan. Lekin bir kuni har
            //       safar buyurtmasini kutishdan charchagach, ularni Buxoroda
            //       yasashni qanday boshlash haqida o‘yladi. «Balki un
            //       Samarqanddan olib kelarmiz», deb o'yladi u. Lekin tortlar ish
            //       bermadi. "Unda siz mahalliy suv olib kelishingiz kerak." Ammo
            //       yana, muvaffaqiyatsizlik. “Ehtimol, loyda ham shundaydir!
            //       Samarqand loyini olib kelib, undan tandir qilish kerak!”.
            //       Natija avvalgidek qoldi. "Balki bu ustalardir? Samarqandlik
            //       usta kerak!”. Lekin samarqandlik usta ham bu ta’mni Buxoroda
            //       takrorlay olmadi. Shundan so‘ng amir urinishlardan voz kechib,
            //       Samarqanddan o‘zi yoqtirgan noz-ne’matlarni olib kelishda
            //       davom etadi. Samarqand bozorlarida har qanday ta’mga mos turli
            //       xil meva, sabzavotlar va yong‘oqlarni ham uchratish mumkin.
            //       Oʻzbek oshxonasi haqida batafsil maʼlumotni ushbu havola
            //       orqali oʻqishingiz mumkin.
            //     </p>
            //     <div className="flex gap-4 mt-[48px]">
            //       <img
            //         className="w-[240px] h-[240px] rounded-lg object-cover"
            //         src={karimov}
            //         alt=""
            //       />
            //       <img
            //         className="w-[240px] h-[240px] rounded-lg object-cover"
            //         src={karimov}
            //         alt=""
            //       />
            //       <img
            //         className="w-[240px] h-[240px] rounded-lg object-cover"
            //         src={karimov}
            //         alt=""
            //       />
            //     </div>
            //     <p className="mt-[48px] not-italic font-semibold text-2xl leading-8 text-orange-600">
            //       Tarixi
            //     </p>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black mt-4">
            //       Samarqandni faqat uning hududida joylashgan zamonlar va turli
            //       madaniyatlar uyg'unligi bilan ko'rish va abadiy maftun etish
            //       mumkin. Samarqand dunyoning Rim va Nankin kabi qadimiy
            //       poytaxtlari bilan tengdosh ekanini bilasizmi? Ha ha! Shahar
            //       taxminan 2750 yil muqaddam paydo bo'lgan va bu unga nafaqat
            //       Markaziy Osiyo, balki dunyoning eng qadimiy shaharlaridan biri
            //       deb nomlanish huquqini beradi. Shahar gullab-yashnashi Amir
            //       Temur (Temur) va uning avlodlari davrida eng yuqori cho‘qqiga
            //       chiqdi.
            //     </p>
            //     <div className="flex gap-4 my-6">
            //       <img src={karimov} alt="" />
            //       <img src={karimov} alt="" />
            //     </div>
            //     <p className="not-italic font-normal text-2xl leading-8 text-black">
            //       O‘shanda Samarqand uning qudratli saltanatining poytaxtiga
            //       aylandi. Temur o‘z poytaxtini qanday tanlagani haqida bir
            //       rivoyat bor... Tanlov qilish uchun u o‘z qo‘l ostidagilarga
            //       barcha shaharlarni kezib, darvozalariga qo‘chqor o‘ljasini
            //       osib qo‘yishni buyurgan va bir oy o‘tib shaxsan o‘zi aylanma
            //       yo‘lni bosib o‘tgan. Hamma darvozalarda murdalar chirishga
            //       ulgurdi, faqat Samarqand darvozalarida u deyarli butkul
            //       buzilmagan, hatto qurib qolgan. Buni ko‘rgan Temur: “Bu shahar
            //       eng toza havo va sog‘lom yerga ega. Poytaxt shu yerda bo'ladi!
            //       Temurning nabirasi Mirzo Ulug‘bek tufayli shahar jahon
            //       ilm-fanining markaziga aylandi. Samarqand “Bu hayotda tashrif
            //       buyurishga arziydigan 50 shahar” ro‘yxatiga kiritildi.
            //     </p>
            //     <p className="not-italic font-semibold text-2xl leading-8 text-orange-600 mt-[48px] mb-4">
            //       Location:
            //     </p>
            //     <iframe
            //       title="This is a unique title"
            //       src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11988.36848973895!2d69.22814145000001!3d41.3068595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1659737594629!5m2!1sen!2s"
            //       width="100%"
            //       height="355px"
            //       style={{ border: "0" }}
            //       allowFullScreen=""
            //       loading="lazy"
            //       referrerPolicy="no-referrer-when-downgrade"
            //     ></iframe>
            //   </div>
              // <div className="col-span-4">
              //   <div className="flex flex-col">
              //     <Search />
              //     <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
              //       <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Samarqand sayohati
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Shahar haqida
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Eng mashhur joylari
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Samarqand haqida video
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Iqlimi
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Oshxonalar
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Tarixi
              //         </li>
              //         <li className="hover:text-[#F3692E] cursor-pointer">
              //           Location
              //         </li>
              //       </ul>
              //     </div>
              //     <button
              //       className="py-[18px] w-[270px] mt-[32px] px-[32px] bg-[#F36326] rounded-lg not-italic font-semibold text-base text-center text-white"
              //       onClick={openModal}
              //     >
              //       Buyurtma qilish
              //     </button>
              //   </div>
              // </div>
            // </div >
