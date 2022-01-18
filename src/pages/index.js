import * as React from "react"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { useTranslation } from "react-i18next"
import Layout from "../components/layout"
import Seo from "../components/seo"
import CardProject from "../components/CardProject"
import CardAward from "../components/CardAward"
import pt from "../locales/pt.json"
import en from "../locales/en.json"

import { StaticImage } from "gatsby-plugin-image"

//images
//import banner from "../images/banner-1.jpg"
import portfolio1 from "../images/homeportfolio-1.png"
import portfolio2 from "../images/homeportfolio-2.jpg"
import portfolio3 from "../images/homeportfolio-3.jpg"
import portfolio4 from "../images/homeportfolio-4.jpeg"
import portfolio5 from "../images/homeportfolio-5.jpg"
import portfolio6 from "../images/homeportfolio-6.jpeg"

import cardaward1 from "../images/architizer-2021.png"
import cardaward2 from "../images/refurbishment-2020.png"
import cardaward3 from "../images/honorable_mention-beiramarhouse.png"
import cardaward4 from "../images/european_awards-2020.png"

import card1 from "../images/card1.png"
import card2 from "../images/card2.png"

import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

i18n.use(initReactI18next).init({
  resources: {
    en: en,
    pt: pt,
  },
  fallbackLng: "en",
  debug: true,
})

function Home() {
  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }

  const { t } = useTranslation()

  const { ref, inView } = useInView({
    //threshold: 0.2
  })
  const animation = useAnimation()

  useEffect(() => {
    console.log("use effect hook, inView= ", inView)
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
        },
      })
    }
    if (!inView) {
      animation.start({
        y: 20,
        opacity: 0,
      })
    }
  }, [inView])

  return (
    <Layout>
      <Seo title="Home" />
      <div className="home">
        <div className="home-hero">
          <motion.div
            className="big-title-Book"
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ ...transition }}
          >
            {t("hero-title-1")} <br />
            {t("hero-title-2")}{" "}
            <span className="big-title-BookItalic">{t("hero-title-3")}</span>
          </motion.div>
          <StaticImage
            src="../images/banner-1.jpg"
            width={670}
            alt="banner"
            className="home-hero-banner"
          />
          {/* <img src={banner} className="home-hero-banner" alt="" /> */}
        </div>

        <motion.div ref={ref} className="home-portfolio" animate={animation}>
          <div className="home-portfolio-intro">
            <div className="home-portfolio-intro-left text-detail">
              2011-2021
            </div>
            <div className="home-portfolio-intro-mobile">
              <div className="home-portfolio-intro-center title-Regular">
                {t("home-portfolio-title")}
              </div>
              <a
                href="/portfolio"
                className="home-portfolio-intro-right text-detail"
              >
                {t("text-topage")}
              </a>
            </div>
          </div>
          <div className="home-portfolio-note text-note">
            {t("home-portfolio-text-note")}
          </div>
          <div className="home-portfolio-projects">
            <CardProject
              cardProjectClassName="card-project-1"
              cardType="card-project"
              image={portfolio1}
              title={t("card-project-title-1")}
              location={t("card-project-location-1")}
              country={t("card-project-country-1")}
            />

            <div className="home-portfolio-projects-row">
              <CardProject
                cardProjectClassName="card-project-2 -mobile"
                cardType="card-project"
                image={portfolio2}
                title={t("card-project-title-2")}
                location={t("card-project-location-2")}
                country={t("card-project-country-2")}
              />
              <CardProject
                cardProjectClassName="card-project-3"
                cardType="card-project-down"
                image={portfolio3}
                title={t("card-project-title-3")}
                location={t("card-project-location-3")}
                country={t("card-project-country-3")}
              />
            </div>

            <CardProject
              cardProjectClassName="card-project-4"
              cardType="card-project"
              image={portfolio4}
              title={t("card-project-title-4")}
              location={t("card-project-location-4")}
              country={t("card-project-country-4")}
            />

            <div className="home-portfolio-projects-row">
              <CardProject
                cardProjectClassName="card-project-5"
                cardType="card-project"
                image={portfolio5}
                title={t("card-project-title-5")}
                location={t("card-project-location-5")}
                country={t("card-project-country-5")}
              />
              <CardProject
                cardProjectClassName="card-project-6"
                cardType="card-project-down"
                image={portfolio6}
                title={t("card-project-title-6")}
                location={t("card-project-location-6")}
                country={t("card-project-country-6")}
              />
            </div>
          </div>
        </motion.div>

        <div className="home-jobs">
          <div className="big-title-BookItalic home-jobs-text">
            {t("jobs-title-1")}
          </div>
        </div>

        <div className="home-awards">
          <div className="home-awards-intro">
            <div className="home-awards-intro-left text-detail">2017-2021</div>
            <div className="home-awards-intro-mobile">
              <div className=" home-awards-intro-center title-Regular">
                {t("home-awards-title")}
              </div>
              <a href="/media" className="home-awards-intro-right text-detail">
                {t("text-topage")}
              </a>
            </div>
          </div>

          <div className="home-awards-wrapper">
            <CardAward
              image={cardaward1}
              title={t("card-award-title-1")}
              date={t("card-award-date-1")}
            />
            <CardAward
              image={cardaward2}
              title={t("card-award-title-2")}
              date={t("card-award-date-2")}
            />
            <CardAward
              image={cardaward3}
              title={t("card-award-title-3")}
              date={t("card-award-date-3")}
            />
            <CardAward
              image={cardaward4}
              title={t("card-award-title-4")}
              date={t("card-award-date-4")}
            />

            <CardAward
              image={cardaward1}
              title={t("card-award-title-1")}
              date={t("card-award-date-1")}
            />
            <CardAward
              image={cardaward2}
              title={t("card-award-title-2")}
              date={t("card-award-date-2")}
            />
            <CardAward
              image={cardaward3}
              title={t("card-award-title-3")}
              date={t("card-award-date-3")}
            />
            <CardAward
              image={cardaward4}
              title={t("card-award-title-4")}
              date={t("card-award-date-4")}
            />
          </div>
        </div>

        <div className="home-contact">
          <img src={card1} className="home-contact-img1 col-xs-5" alt=" " />
          <img
            src={card2}
            className="home-contact-img2 col-xs-offset-6 col-xs-4"
            alt=" "
          />
          <div className="big-title-Regular home-contact-text">
            <a className="home-contact-text-link" href="/Contacts">
              {t("contact-title-1")}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Home
