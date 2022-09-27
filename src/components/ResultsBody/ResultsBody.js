import React from "react";
// import PrintIcon from "@mui/icons-material/Print";
import "./ResultsBody2.css";
import "../Chart/BarChart";
import BarChart from "../Chart/BarChart";
import { ArrowRight } from "@mui/icons-material";
import { DataContext } from "../../context/DataContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function ResultsBody() {
  const { results } = useContext(DataContext);

  const navigate = useNavigate();
  const navigateToRecommendations = () => {
    navigate("/recommendations");
  };

  //grabbing the highest result, later remove to avoid duplicates

  let labels = [];
  let percentage = [];

  // console.log(results);

  if (results.jsonData)
    for (const key in results.jsonData.Diagnosis) {
      // console.log(key);
      // console.log(results.jsonData.Diagnosis[key]);

      labels.push(key);
      percentage.push(parseInt(results.jsonData.Diagnosis[key] * 100));
    }

  //get the index and associate the value with the disorder
  console.log(Math.max(...percentage));
  console.log(percentage.indexOf(Math.max(...percentage)));

  return (
    <div className="ResultsBody">
      <div className="ResultsBody__outlineInner">
        <p className="ResultsBody__title">Diagnosis: </p>
        <p className="ResultsBody__predicted">
          {labels[percentage.indexOf(Math.max(...percentage))]} detected
        </p>
        {/* <PrintIcon className="ResultsBody__printIcon" /> */}
        <div className="ResultsBody__dividingBar"></div>
        <div className="ResultsBody__diagnoseResult">Diagnostic Result:</div>
        <div className="ResultsBody__results">
          <BarChart />
          <button
            className="ResultsBody__nextButton"
            onClick={navigateToRecommendations}
          >
            <p className="ResultsBody__buttonText">Recommendations</p>
            <ArrowRight className="ResultsBody__buttonIcon" />
          </button>
        </div>
      </div>
    </div>
  );
}
