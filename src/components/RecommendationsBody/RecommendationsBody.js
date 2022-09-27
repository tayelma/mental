import React from "react";
import "./ReccomendationsBody.css";
import {
  Depression,
  // Schizophrenia,
  // SubstanceAbuse,
  // Anxiety,
  // Bipolar,
} from "./RecommendationsList";

//get the resukts from the context of the highest value, show recommendations based on selected one

function RecommendationsBody() {
  return (
    <div className="RecommendationsBody">
      <p className="RecommendationsBody__heading">
        Recommendations for management:{" "}
      </p>
      <div className="RecommendationsBody__body">
        <ul className="RecommendationsBody__list">
          {Depression.map((recomendation, i) => {
            return (
              <li className="RecommendationsBody__listRow" key={i}>
                {recomendation.reccomendation}
              </li>
            );
          })}
        </ul>
        <div className="RecommendationsBody__referral">
          <p className="RecommendationsBody__referalOption">
            Referral Option: {"TBD "}
          </p>
        </div>
        {/* <button className="RecommendationsBody__button">
          <p className="RecommendationsBody__buttonText">End Process</p>
        </button> */}
      </div>
    </div>
  );
}

export default RecommendationsBody;
