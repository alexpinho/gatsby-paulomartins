import * as React from "react"

const CardJobs = ({ title, description, see }) => {
  return (
    <div className="card-jobs">
      <div className="card-jobs-title card-jobs-title">{title}</div>
      <div className="card-jobs-description text-note">{description}</div>
      <div className="card-jobs-see text-note">{see}</div>
    </div>
  )
}

export default CardJobs
