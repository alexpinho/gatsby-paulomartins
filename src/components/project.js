import * as React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { useTranslation } from "react-i18next"
import pt from "../locales/pt.json"
import en from "../locales/en.json"

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    pt: pt,
  },
  fallbackLng: "en",
  debug: true,
})

const Project = ({
  ano,
  imageData,
  title,
  cliente,
  local,
  area,
  estado,
  fotografia,
  descricao,
}) => {
  const { t } = useTranslation()
  return (
    <div className="project">
      <div className="project-detail">{ano}</div>
      <div className="big-title-Book">{title}</div>
      <Image fluid={imageData} alt={title} className="project-banner" />
      <Link to="/" style={{ textDecoration: "none", cursor: "pointer" }}>
        <div className="project-detail" style={{ textDecoration: "underline" }}>
          &larr; {t("button-back")}
        </div>
      </Link>
      <div className="project-specs">
        <div className="project-spec-title">
          {t("spec-client")}
          <span className="project-spec">{cliente}</span>
        </div>
        <div className="project-spec-title">
          {t("spec-local")}
          <span className="project-spec">{local}</span>
        </div>
        <div className="project-spec-title">
          {t("spec-area")}
          <span className="project-spec">{area}</span>
        </div>
        <div className="project-spec-title">
          {t("spec-state")}
          <span className="project-spec">{estado}</span>
        </div>
        <div className="project-spec-title">
          {t("spec-photo")}
          <span className="project-spec">{fotografia}</span>
        </div>
      </div>
      <br />
      <div className="project-description">
        <div className="project-spec">{descricao}</div>
      </div>
    </div>
  )
}

export default Project
