import React, { useState } from "react";
import { AddIcon, Close } from "../../assets/icon";
import "./Questions.css";
import Search from "../../Components/search/search";
import { useTranslation } from "react-i18next";

const Questions = () => {
  const [expanded, setExpanded] = useState(false);
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const [expanded7, setExpanded7] = useState(false);
  const [expanded8, setExpanded8] = useState(false);
  const [expanded9, setExpanded9] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="questions">
      <div className="mx-auto absolute w-full">
        <div className="question-header">
          <div className="question-bc">
            <div className="cites-content">
              <div className="mt-[28px]">
                <h1 className="city-head-title">{t("questions")} </h1>
                <p className="city-head-text">
                  {t("surveyQuestions")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="cites-content">
          <div className="question-content-main flex">
            <div className="flex-auto w-96">
              <h1>{t("basicQuestions")} </h1>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded(!expanded)}
                    className="question-title"
                  >
                   {t("uzbekistanLocated")}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded(!expanded)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded && (
                  <>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.25541040002!2d71.78278911491667!3d40.38103156573462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83b8ca19ff63%3A0x8280fefda94b4cea!2sWorld%20Glamour%20Tour!5e0!3m2!1suz!2s!4v1659723521972!5m2!1suz!2s"
                      width="580"
                      height="300"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                      frameBorder="0"
                      title="location"
                    ></iframe>
                  </>
                )}
              </article>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded1(!expanded1)}
                    className="question-title"
                  >
                    {t("kitchen")}{" "}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded1(!expanded1)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded1 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
              <h2 className="location">{t("passport")}  </h2>
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded2(!expanded2)}
                    className="question-title"
                  >
                    {t("international")}{" "}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded2(!expanded2)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded2 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>{" "}
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded3(!expanded3)}
                    className="question-title"
                  >
                    {t("lost")}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded3(!expanded3)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded3 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
              <h2 className="location">{t("viza")}</h2>{" "}
              
             
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded6(!expanded6)}
                    className="question-title"
                  >
                    {t("term")} {" "}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded6(!expanded6)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded6 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
              <h2 className="location">{t("signUp")} </h2>{" "}
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded7(!expanded7)}
                    className="question-title"
                  >
                    {t("holiday")}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded7(!expanded7)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded7 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>{" "}
              
              <article className="question">
                <header>
                  <h4
                    onClick={() => setExpanded9(!expanded9)}
                    className="question-title"
                  >
                    {t("border")}
                  </h4>
                  <button
                    className="btn"
                    onClick={() => setExpanded9(!expanded9)}
                  >
                    {expanded ? <Close /> : <AddIcon />}
                  </button>
                </header>
                {expanded9 && (
                  <>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa iste voluptate inventore accusamus hic, repudiandae
                      accusantium consequuntur sint nobis alias, fugiat quia?
                      Vel, harum magni sint eos mollitia aperiam iure.
                    </p>
                  </>
                )}
              </article>
            </div>
            <div className="mt-[40px]">
              <div className="col-span-4">
                <div className="flex flex-col">
                  <Search />
                  <div className="bg-white transition duration-150 ease-out shadow-lg shadow-neutral-400/50 py-[24px] pl-9 rounded mt-[32px] max-w-[270px]">
                    <ul className="not-italic  font-bold text-lg leading-6 flex flex-col gap-[18px]">
                      <li className="text-[#F3692E] cursor-pointer">
                        {t("basicQuestions")}
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        {t("passport")}
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        {t("viza")}
                      </li>
                      <li className="hover:text-[#F3692E] cursor-pointer">
                        {t("signUp")}
                      </li>
                      
                    </ul>
                  </div>
                  <button className="py-[18px] w-[270px] mt-[32px] px-[32px] bg-[#F36326] rounded-lg not-italic font-semibold text-base text-center text-white">
                    {t("send_request")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;        
                    