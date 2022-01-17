import * as React from "react"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { useTranslation } from "react-i18next"
import pt from "../locales/pt.json"
import en from "../locales/en.json"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardJobs from "../components/CardJobs"

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

  return (
    <Layout>
      <Seo title="Jobs" />
      <div className="jobs">
        <div className="jobs-hero">
          <div className="row">
            <div className="big-title-Book"> {t("jobs-jobs-title")} </div>

            <div className="col-xs-offset-1 col-xs-6">
              <div className="text-note">{t("jobs-text-note")}</div>
            </div>
          </div>
        </div>

        <div className="jobs-wrapper">
          <CardJobs
            title={t("card-jobs-title-1")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")}
          />
          <CardJobs
            title={t("card-jobs-title-2")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")}
          />
          <CardJobs
            title={t("card-jobs-title-3")}
            description={t("card-jobs-description-1")}
            see={t("card-jobs-see")}
          />
        </div>
      </div>
    </Layout>
  )
}

export default Jobs
