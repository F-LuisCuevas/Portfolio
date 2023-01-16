import React from "react"
import Intent from "./link"

export default function Navbar() {
  return (
    <nav className="container my-3">
        <div className=" mx-4">
          <Intent to="/">About</Intent>
        </div>
        <div className=" mx-4">
          <Intent to="/projects">Projects</Intent>
        </div>
    </nav>
  )
}
