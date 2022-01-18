import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import ProjectPreview from "../components/project-preview"

const Portfolio = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            descricao
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

  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      <Seo title="Portfolio" />

      <div className="portfolio">
        <div className="portfolio-hero">
          <div className="row">
            <div className="big-title-Book">Portfolio </div>
            <div className="row-description">
              <div className="text-note">
                Selection of projects carried out by the studio in different
                contexts, different scales and with varying conditions.
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio-projects">
          {projects.map(({ node: project }, index) => {
            const title = project.title
            const descricao = project.descricao
            const slug = project.slug
            const imageData = project.image.childImageSharp.fluid

            return (
              <ProjectPreview
                key={index}
                title={title}
                descricao={descricao}
                slug={slug}
                imageData={imageData}
              />
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export default Portfolio
