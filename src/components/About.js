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
          <div> I am a Physicist and Machine Learning Engineer with 2+ years of experience in Data Modeling at European center for nuclear research (CERN), proficient in Python and SQL skills. I have expertise in Data preparation/cleansing, Model building, Model Deployment, and evaluating algorithms to improve performance, quality, and accuracy for Regression (Linear/Logistic, Lasso and Ridge), Classification (Binary/Multi-label), Gradient Boosting,XGBoost, KNN, Object Detection and Tracking, and Recommender Systems (Content-based).</div>
          <br />
          <div>
            My main expertise focus is machine learning for business, doing tasks such as FORECASTING RETAIL, LEADSCORING and RISK SCORING with a scientific analysis aproach.

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
