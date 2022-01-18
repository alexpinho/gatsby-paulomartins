import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AwardPreview from "../components/award-preview"

import { motion } from "framer-motion"

const Media = () => {
  const data = useStaticQuery(graphql`
    {
      allAwardsJson {
        edges {
          node {
            title
            slug
            date
            country
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const awards = data.allAwardsJson.edges

  const transition = { duration: 1, ease: [0.6, 0.01, -0.05, 0.9] }

  return (
    <Layout>
      <Seo title="Media" />
      <div className="media">
        <motion.div
          className="media-hero"
          initial={{ opacity: 0, translateY: 20 }}
          animate={{
            opacity: 1,
            translateY: 0,
            transition: { ...transition },
          }}
        >
          <div className="row">
            <div className="big-title-Book">Media </div>
            <div className="row-description">
              <div className="text-note">
                Selection of news, references about the studio in online and
                printed publications, as well as awards and comments to our
                projects.
              </div>
            </div>
          </div>
        </motion.div>

        <div className="media-awards">
          {awards.map(({ node: award }, index) => {
            const title = award.title
            const date = award.date
            const country = award.country
            const slug = award.slug
            const imageData = award.image.childImageSharp.fluid

            return (
              <AwardPreview
                key={index}
                title={title}
                date={date}
                slug={slug}
                country={country}
                imageData={imageData}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Media
