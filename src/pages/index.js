import React from "react"
import "../style.css"
import Navbar from "../components/Navbar"
import About from "../components/About"
import { Helmet } from "react-helmet"

function index() {
  return (
    <div>
      <Navbar />
      <About />
      <Helmet>
        <meta charSet="utf-8" />
        <title> Home | Luis Cuevas </title>
        <meta
          name="google-site-verification"
          content="H_T5IHaO3wq5Bi1lvXlgJq105uGg7_JjTsxkDgNKnCw"
        />
      </Helmet>
    </div>
  )
}

export default index
