// import { calculateNewValue } from "@testing-library/user-event/dist/utils";
// import React, { useState } from "react";
// import "./SadPersonsScaleBody.css";
// import { SadPersonsScaleQuestionbank } from "./SadPersonsScaleQuestions";

// function SadPersonsScaleBody() {
//   const [selectedAnswers, setSelectedAnswers] = useState([]); // yes - 1, no - 0

//   const makeAnswer = (key, value) => {
//     const newData = {};
//     newData[`${key}`] = parseInt(value);
//     setAnswers((prevAnswer) => {
//       return { ...prevAnswer, ...newData };
//     });
//   };

//   const handleChange = (name, value) => {
//     setSelectedAnswers((prevValue) => [
//       { name: name, value: value },
//       ...prevValue,
//     ]);
//     console.log({ name, value });
//     const _value = selectedAnswers.find(({ name }) => name === name);
//     makeAnswer(name, value);
//   };

//   return (
//     <div className="SadPersonsScaleBody">
//       <p className="SadPersonsScaleBody__heading">SAD PERSONS SCALE: </p>

//       {SadPersonsScaleQuestionbank.map((sadperson, i) => {
//         return (
//           <div className="SadPersonsScaleBody__outline" key={i}>
//             <div className="SadPersonsScaleBody__outlineInner">
//               <div className="SadPersonsScaleBody__disorder">
//                 {sadperson.feature}
//               </div>

//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "space-between",
//                   }}
//                   className="QuestionsBody__answersContainer"
//                 >
//                   <div
//                     style={{
//                       width: 18,
//                       height: 18,
//                       borderRadius: 5,
//                       border: "solid",
//                       borderWidth: 1,
//                       // background: "grey",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginRight: 6,
//                     }}
//                     onClick={(e) => handleChange(sadperson.symptom, "1")}
//                   >
//                     {value?.value === "1" && (
//                       <div
//                         style={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: 10,
//                           background: "black",
//                         }}
//                       />
//                     )}
//                   </div>
//                   yes
//                 </div>

//                 <div
//                   className="QuestionsBody__space"
//                   style={{ width: "5rem" }}
//                 ></div>

//                 <div
//                   className="QuestionsBody__container"
//                   style={{ display: "flex", alignItems: "center" }}
//                 >
//                   <div
//                     style={{
//                       width: 18,
//                       height: 18,
//                       borderRadius: 5,
//                       border: "solid",
//                       borderWidth: 1,
//                       // background: "grey",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       marginRight: 6,
//                       marginLeft: 8,
//                     }}
//                     onClick={(e) => handleChange(sadperson.symptom, "0")}
//                   >
//                     {value?.value === "0" && (
//                       <div
//                         style={{
//                           width: 10,
//                           height: 10,
//                           borderRadius: 10,
//                           background: "black",
//                         }}
//                       />
//                     )}
//                   </div>
//                   no
//                 </div>
//               </div>
//             </div>
//             <div className="SadPersonsScaleBody__question">
//               {sadperson.question}
//             </div>
//           </div>
//         );
//       })}
//       <div className="SadPersonsScaleBody__positionButton">
//         <button
//           type="submit"
//           className="SadPersonsScaleBody__submitButton"
//           //   onClick={handleSubmit}
//         >
//           <p className="SadPersonsScaleBody__submitText">Submit</p>
//         </button>
//         {/* <CustomButton /> */}
//       </div>
//     </div>
//   );
// }

// export default SadPersonsScaleBody;
