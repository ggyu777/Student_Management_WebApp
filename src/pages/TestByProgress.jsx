import React from "react";
import CorrectAnswerRate from "../elements/testbyprogress/correctanswer/CorrectAnswerRate";
import TestScore from "../elements/testbyprogress/testScore/TestScore";

function TestByProgress() {
  return (
    <>
      <TestScore />
      <CorrectAnswerRate />
    </>
  );
}

export default TestByProgress;
