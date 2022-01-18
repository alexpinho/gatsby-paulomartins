import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import CardTeam from "../components/CardTeam"

import team from "../images/team.jpeg"
import PM from "../images/PM.png"
import DC from "../images/DC.png"
import JPS from "../images/JPS.png"
import PC from "../images/PC.png"
import SG from "../images/SG.png"
import SV from "../images/SV.png"
import JS from "../images/JS.png"
import HF from "../images/HF.png"

import { motion } from "framer-motion"

const Atelier = () => {
  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <Layout>
      <Seo title="Atelier" />
      <div className="atelier">
        <div className="atelier-hero">
          <motion.div
            className="big-title-Book col-xs-6"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { ...transition },
            }}
          >
            Meet our
          </motion.div>
          <motion.div
            className="big-title-BookItalic col-xs-3"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: { ...transition },
            }}
          >
            team
          </motion.div>
          <img src={team} className="atelier-hero-banner col-xs-5" alt="team" />
        </div>
        <div className="atelier-information">
          <div className="text atelier-information-1">
            Paulo Martins Arquitectura assumes itself as a studio focused on
            experimental and strategic design, provoking and making the
            sensorial and emotional experiences part of the process and a goal
            to be achieved.
          </div>
          <div className="text atelier-information-2">
            Through a holistic vision, we view and understand our work as a
            vehicle responsible for social, political, economical well-being and
            social equilibrium, assuming this responsibility as an opportunity
            to reinvent strategies and propose alternatives!
          </div>
          <div className="text atelier-information-3">
            We project value-added buildings, designed to offer a high level of
            satisfaction and well-being, enhancing the relationship between
            dualities (interior / exterior, light / shade, soft / rough…),
            blurring their boundaries and diluting the barrier that separates
            them.
          </div>
        </div>
        <div className="atelier-team">
          <div className="atelier-team-hero">
            <div className="title-Regular col-xs-offset-3"> The Team </div>
          </div>
          <div className="atelier-wrapper">
            <CardTeam
              image={PM}
              title={"Paulo Martins"}
              job={"Arquitecto Principal"}
            />
            <CardTeam
              image={DC}
              title={"Doriana Cristino"}
              job={"Comunicação"}
            />
            <CardTeam
              image={JPS}
              title={"João Pedro Silva"}
              job={"Arquitecto"}
            />
            <CardTeam
              image={PC}
              title={"Pedro Cardoso"}
              job={"Arquitecto Estagiário"}
            />
            <CardTeam image={SG} title={"Sara Garcia"} job={"Arquitecta"} />
            <CardTeam
              image={SV}
              title={"Soraia Vicente"}
              job={"Arquitecta Estagiária"}
            />
            <CardTeam image={JS} title={"João Silva"} job={"Arquitecto"} />
            <CardTeam image={HF} title={"Hugo Ferreira"} job={"Arquitecto"} />
          </div>
        </div>

        <div className="atelier-quote big-text-quote">
          We propose a sustainable and hedonistic architecture, free from
          preconception and stereotypes.{" "}
        </div>
      </div>
    </Layout>
  )
}

export default Atelier
