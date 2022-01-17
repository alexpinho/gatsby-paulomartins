import * as React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ imageData, title, descricao, url }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <p>{descricao}</p>
    <p>
      <Link to={url}>View this project online &rarr;</Link>
    </p>
    <p>
      <Link to="/">&larr; BACK</Link>
    </p>
  </div>
)

export default Project
