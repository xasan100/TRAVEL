import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import { Main } from "./Pages/Main";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["uz", "en", "ru", "ar"],
    fallbackLng: "",
    detection: {
      order: ["path", "cookie", "localStorage", "htmlTag"],
      caches: ["cookie"],
    },
    backend: {
      loadPath: `/locales/{{lng}}/translation.json`,
    },
    react: { useSuspense: false },
  });

function App() {
  return (
    <>
      <Layout>
        <div className="container">
          <Routes>
            {Main.map((page) => (
              <Route path={page?.path} element={page?.page} />
            ))}
          </Routes>
        </div>
      </Layout>
    </>
  );
}

export default App;
