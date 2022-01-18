import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AwardPreview from "../components/award-preview"

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
                fluid(maxWidth: 350) {
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

  return (
    <Layout>
      <Seo title="Media" />
      <div className="media">
        <div className="media-hero">
          <div className="row">
            <div className="big-title-Book">Media </div>
            <div className="col-xs-offset-1 col-xs-5">
              <div className="text-note">
                Selection of news, references about the studio in online and
                printed publications, as well as awards and comments to our
                projects.
              </div>
            </div>
          </div>
        </div>

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
