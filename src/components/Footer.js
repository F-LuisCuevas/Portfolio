import React from "react"
import "../style.css"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaEnvelope as Mail,
  FaLinkedin as Linkedin,
  FaFilePdf as Resume,
  FaMedium as Medium,
  FaQuoteRight as DevTo,
} from "react-icons/fa"

export default function Footer() {
  return (
    <div className="h1 mt-5 mb-5 footer">
      <a
        className="mr-5 icon"
        href="https://github.com/F-LuisCuevas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github />
      </a>
      <a
        className="mr-5 icon"
        href="mailto:elizabeth.villalejos@gmail.com?subject=Website%20Inquiry"
      >
        <Mail />
      </a>
      <a
        className="mr-5 icon"
        href="https://www.linkedin.com/in/luis-enrique-cuevas-picos-b256a3186/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className="mr-5 icon"
        href="https://twitter.com/miss_elliev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter />
      </a>
      <a
        className="mr-5 icon"
        href="https://dev.to/misselliev"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DevTo />
      </a>
      <a
        className="mr-5 icon"
        href="https://drive.google.com/file/d/1A7sAi66y0fh40DmpmR9HjHfmvsHGqQGr/view"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Resume />
      </a>
    </div>
  )
}
