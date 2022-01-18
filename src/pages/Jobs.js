import * as React from "react"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import pt from "../locales/pt.json"
import en from "../locales/en.json"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardJobs from "../components/CardJobs"
import CardJobsPopup from "../components/CardJobsPopup"
import CardJobsExtended from "../components/CardJobsExtended"

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    pt: pt,
  },
  fallbackLng: "en",
  debug: true,
})

function Jobs() {
  const { t } = useTranslation()
  const [buttonPopup, setButtonPopup] = useState(false)

  return (
    <Layout>
      <Seo title="Jobs" />
      <div className="jobs">
        <CardJobsPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <CardJobsExtended
            title={t("card-jobs-title-2")}
            note={t("card-jobs-extended-note-2")}
            description={t("card-jobs-description-1")}
            fill={t("card-jobs-extended-fill-2")}
            subtitle1={t("card-jobs-extended-subtitle1-2")}
            responsibilities={t("card-jobs-extended-responsibilities-2")}
            subtitle2={t("card-jobs-extended-subtitle2-2")}
            requirements={t("card-jobs-extended-requirements-2")}
          />
        </CardJobsPopup>

        <div className="jobs-hero">
          <div className="row">
            <div className="big-title-Book" id="title">
              {" "}
              {t("jobs-jobs-title")}{" "}
            </div>

            <div /*className="col-xs-offset-1 col-xs-6"*/ id="notes">
              <div className="text-note">{t("jobs-text-note")}</div>
            </div>
          </div>
        </div>

        <div className="jobs-wrapper">
          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-1")}
              description={t("card-jobs-description-1")}
            />

            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>
                {t("card-jobs-see")}
              </button>
            </div>
          </div>

          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-2")}
              description={t("card-jobs-description-1")}
            />
            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>
                {t("card-jobs-see")}
              </button>
            </div>
          </div>

          <div className="jobs-wrapper-card">
            <CardJobs
              title={t("card-jobs-title-3")}
              description={t("card-jobs-description-1")}
            />
            <div className="text-note" id="wrapper-button">
              <button onClick={() => setButtonPopup(true)}>
                {t("card-jobs-see")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Jobs
