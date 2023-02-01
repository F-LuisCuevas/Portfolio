import React from "react"
import Footer from "./Footer"
import "../style.css"

export default function About() {
  return (
    <div className="main-container">
      <div className="col-md container-col">

        <div className="img-col">
          <div className="hello-img">
          </div>
        </div>
        <div className="text-col">
          <div> I am a Physicist and Machine Learning Engineer with 2+ years of experience in Data Modeling at European center for nuclear research (CERN), proficient in Python and SQL skills. I have expertise in Data preparation/cleaning, Model building, Model Deployment, and evaluating algorithms to improve performance, quality, and accuracy in Supervised and Unsupervised algorithms, Detection, Tracking, and Recommender Systems.</div>
          <br />
          <div>
            My main expertise focus is machine learning for business, doing tasks such as FORECASTING RETAIL, LEADSCORING and RISK SCORING with a scientific analysis approach.

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
