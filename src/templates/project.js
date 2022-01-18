import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query ($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      ano
      title
      image {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cliente
      local
      areabruta
      estado
      fotografia
      descricao
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const ano = project.ano
  const title = project.title
  const imageData = project.image.childImageSharp.fluid
  const cliente = project.cliente
  const local = project.local
  const area = project.areabruta
  const estado = project.estado
  const fotografia = project.fotografia
  const descricao = project.descricao

  return (
    <Layout>
      <Project
        ano={ano}
        title={title}
        imageData={imageData}
        cliente={cliente}
        local={local}
        area={area}
        estado={estado}
        fotografia={fotografia}
        descricao={descricao}
      />
    </Layout>
  )
}

export default ProjectTemplate
