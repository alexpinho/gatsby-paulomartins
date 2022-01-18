import React from "react"

const Typeform = ({ name, email, message }) => {
  return (
    <form className="typeform">
      <div className="typeform-col1">
        <div className="typeform-col1-name text-note">
          <label>
            <input placeholder={name} type="text" name="name" />
          </label>
        </div>
        <div className="typeform-col1-email text-note">
          <label>
            <input placeholder={email} type="text" name="email" />
          </label>
        </div>
      </div>

      <div className="typeform-col2">
        <div className="typeform-col2-message text-note">
          <label>
            <input placeholder={message} type="text" name="message" />
          </label>
        </div>

        <div className="typeform-col2-send text-detail">
          <label>
            <input type="submit" value="SEND" />
          </label>
        </div>
      </div>
    </form>
  )
}

export default Typeform
