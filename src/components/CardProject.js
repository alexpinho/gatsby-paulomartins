import * as React from "react"

const CardProject = ({
  cardType,
  cardProjectClassName,
  image,
  title,
  location,
  country,
}) => {
  return (
    <div className={cardProjectClassName}>
      <div className={cardType}>
        <img src={image} className="card-project-img" alt="Project_Photo" />
        <div className="card-project-body">
          <div className="card-project-title">{title}</div>
          <div className="card-project-location">{location}</div>
          <div className="card-project-location">{country}</div>
        </div>
      </div>
    </div>
  )
}

export default CardProject
