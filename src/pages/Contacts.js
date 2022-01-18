import * as React from "react"
import { useTranslation } from "react-i18next"
import { motion } from "framer-motion"
import Typeform from "../components/TypeForm"
import Layout from "../components/layout"
import Seo from "../components/seo"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import pt from "../locales/pt.json"
import en from "../locales/en.json"

import map1 from "../images/map-01.png"
import map2 from "../images/map-02.png"

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    pt: pt,
  },
  fallbackLng: "en",
  debug: true,
})

const Contacts = () => {
  const { t } = useTranslation()

  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <Layout>
      <Seo title="Contacts" />
      <div className="contacts">
        <motion.div
          className="contacts-hero"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="big-title-Book"> {t("contacts-contacts-title")} </div>
        </motion.div>

        <div className="contacts-row">
          <div className="contacts-col-1">
            <div className="contacts-info text">
              {" "}
              {t("contacts-info-general")}{" "}
            </div>
            <div className="contacts-adress text-note">
              {" "}
              {t("contacts-adress-1")}{" "}
            </div>
            <div className="contacts-info text">
              {" "}
              {t("contacts-info-careers")}{" "}
            </div>
            <div className="contacts-adress text-note">
              {" "}
              {t("contacts-adress-2")}{" "}
            </div>
            <div className="contacts-info text">
              {" "}
              {t("contacts-info-press")}{" "}
            </div>
            <div className="conacts-adress text-note">
              {" "}
              {t("contacts-adress-3")}{" "}
            </div>
          </div>

          <div className="contacts-col-2">
            <Typeform
              name={t("contacts-form-name")}
              email={t("contacts-form-email")}
              message={t("contacts-form-message")}
            />
          </div>
        </div>

        <div className="contacts-map1">
          <div className="contacts-map1-intro card-project-title">
            {t("contacts-map-info")}
          </div>

          <div className="contacts-map1-main">
            <div className="contacts-map1-portugal">
              <img src={map1} className="contacts-map1-image-1" alt=""></img>
            </div>

            <div className="contacts-map1-description text-note">
              <div id="morada-01">{t("contacts-map-main")}</div>
              <div id="contactos-01">{t("contacts-map-description")}</div>
            </div>
          </div>
        </div>

        <div className="contacts-map2">
          <div className="contacts-map2-intro card-project-title">
            {t("contacts-map-info2")}
          </div>

          <div className="contacts-map2-main">
            <div className="contacts-map2-portugal">
              <img src={map2} className="contacts-map2-image-1" alt=""></img>
            </div>

            <div className="contacts-map2-description text-note">
              <div id="morada-02">{t("contacts-map-main2")}</div>
              <div id="contactos-02">{t("contacts-map-description-2")}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contacts
