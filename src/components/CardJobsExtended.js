import React from "react"

const CardJobsExtended = ({
  title,
  note,
  subtitle1,
  subtitle2,
  description,
  responsibilities,
  requirements,
  fill,
}) => {
  return (
    <div className="card-jobs-ext">
      <div id="col-1">
        <div className="card-jobs-ext-title card-project-title">{title}</div>
        <div className="card-jobs-ext-description text-note">{description}</div>
        <div className="card-jobs-ext-note text">{note}</div>
        <a
          href="https://www.tesla.com/careers/search/?country=PT&query=Internship"
          target="_blank"
        >
          <div className="card-jobs-ext-fill text-note">{fill}</div>
        </a>
      </div>

      <div id="col-2">
        <div className="card-jobs-ext-subtitle1 text">{subtitle1}</div>
        <div className="card-jobs-ext-responsibilities text-note">
          {responsibilities}
        </div>
      </div>

      <div id="col-3">
        <div className="card-jobs-ext-subtitle2 text">{subtitle2}</div>
        <div className="card-jobs-ext-requirements text-note">
          {requirements}
        </div>
      </div>
    </div>
  )
}

export default CardJobsExtended
