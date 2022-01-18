import * as React from "react"

const CardJobs = ({ title, description }) => {
  return (
    <div className="card-jobs">
      <div className="card-jobs-title card-project-title">{title}</div>
      <div className="card-jobs-description text-note">{description}</div>
    </div>
  )
}

export default CardJobs
