import * as React from "react"
import { Link } from "gatsby"

import { useTranslation } from "react-i18next"
import logo from "../images/logo.svg"

function Navbar() {
  const { i18n } = useTranslation()

  return (
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="" />

      <div className="navbar-menus">
        <div className="navbar-btn-lang">
          <button
            className="navbar-btn-lang-pten"
            onClick={() => {
              i18n.changeLanguage("pt")
            }}
          >
            <span className="navbar-text">PT</span>
          </button>
          <button
            className="navbar-btn-lang-pten"
            onClick={() => {
              i18n.changeLanguage("en")
            }}
          >
            <span className="navbar-text">EN</span>
          </button>
        </div>

        <ul className="navbar-menu">
          <li className="navbar-menu-elements">
            <Link to="/" className="navbar-text">
              Home
            </Link>
          </li>
          <li className="navbar-menu-elements">
            <Link to="/Atelier" className="navbar-text">
              Atelier
            </Link>
          </li>
          <li className="navbar-menu-elements">
            <Link to="/Portfolio" className="navbar-text">
              Portfolio
            </Link>
          </li>
          <li className="navbar-menu-elements">
            <Link to="/Jobs" className="navbar-text">
              Jobs
            </Link>
          </li>
          <li className="navbar-menu-elements">
            <Link to="/Media" className="navbar-text">
              Media
            </Link>
          </li>
          <li className="navbar-menu-elements">
            <Link to="/Contacts" className="navbar-text">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
