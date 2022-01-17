import * as React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, imageData, title, descricao }) => (
  <Link
    to={`/${slug}/`}
    style={({ textDecoration: "none" }, { cursor: "pointer" })}
  >
    <div className="project-preview">
      <Image fluid={imageData} alt={title} />
      <div className="project-preview-title text">{title}</div>
    </div>
  </Link>
)

export default ProjectPreview
