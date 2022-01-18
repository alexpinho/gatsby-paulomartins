import * as React from "react"

const CardTeam = ({ image, title, job }) => {
  return (
    <div className="card-team">
      <img src={image} className="card-team-img" alt="team_Photo" />
      <div className="card-team-body">
        <div className="card-team-title text">{title}</div>
        <div className="card-team-job text-note">{job}</div>
      </div>
    </div>
  )
}

export default CardTeam
