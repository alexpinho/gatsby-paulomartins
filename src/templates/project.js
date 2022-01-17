import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      descricao
      url
      image {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const descricao = project.descricao
  const imageData = project.image.childImageSharp.fluid
  const url = project.url

  return (
    <Layout>
      <Project
        title={title}
        descricao={descricao}
        imageData={imageData}
        url={url}
      />
    </Layout>
  )
}

export default ProjectTemplate
