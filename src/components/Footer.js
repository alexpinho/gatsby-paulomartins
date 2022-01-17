import * as React from "react"
//import { useTranslation } from "react-i18next";
import logoWhite from "../images/logo-white.svg"

function Footer() {
  //const { i18n } = useTranslation();

  return (
    <div className="footer">
      <img src={logoWhite} className="footer-logo" alt="" />

      <form className="footer-form-newsletter">
        <div className="footer-text text"> JOIN OUR NEWSLETTER </div>
        <div className="footer-form-newsletter-area">
          <input
            type="email"
            className="footer-form-newsletter-input "
            placeholder="Email"
          />
          <button
            type="submit"
            className="footer-form-newsletter-button text-note"
          >
            {" "}
            SEND{" "}
          </button>
        </div>
      </form>

      <div className="footer-social">
        <div className="footer-text text"> SOCIAL </div>
        <ul className="footer-social-area">
          <li className="footer-social-area-elements">
            <a
              href="https://www.facebook.com/PAULOMARTINSARQDESIGN/"
              className="footer-social-area-elements-text text-note"
              rel="noopener noreferrer"
              target="_blank"
            >
              FB
            </a>
          </li>
          <li className="footer-social-area-elements">
            <a
              href="https://www.instagram.com/paulomartinsarqdesign"
              className="footer-social-area-elements-text text-note"
              rel="noopener noreferrer"
              target="_blank"
            >
              IN
            </a>
          </li>
          <li className="footer-social-area-elements">
            <a
              href="https://www.linkedin.com/company/paulo-martins-arquitectura-&-design/"
              className="footer-social-area-elements-text text-note"
              rel="noopener noreferrer"
              target="_blank"
            >
              LI{" "}
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
