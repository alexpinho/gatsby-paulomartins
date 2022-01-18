import * as React from "react"
import Image from "gatsby-image"

const AwardPreview = ({ slug, imageData, title, date, country }) => (
  <div className="award-preview">
    <Image fluid={imageData} alt={title} />
    <div className="award-preview-infos">
      <div className="text">{title}</div>
      <div className="text-note">{country}</div>
      <div className="text-note">{date}</div>
    </div>
  </div>
)

export default AwardPreview
