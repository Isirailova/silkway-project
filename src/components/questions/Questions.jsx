import React, { useState } from "react";
import "./questions.style.scss";

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    "When will the marathon take place?",
    "Who can participate in the marathon?",
    "How much does it cost to participate?",
    "Where will the marathon take place?",
  ];

  const answers = [
    "On May 11 at 8 am.",
    "Everyone who wants can participate.",
    "The cost per person is $55.00.",
    "Busse Woods Park, Elk Grove, IL 60008",
  ];

  return (
    <div className="questions">
      <h2>Frequently Asked Questions:</h2>
      <div className="questions__content">
        <ol>
          {questions.map((question, index) => (
            <li key={index}>
              <div
                className="questions__content__part"
                onClick={() => toggleAccordion(index)}
              >
                <span>{question}</span>
                <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                  🔽
                </span>
              </div>
              {openIndex === index && <p>{answers[index]}</p>}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Questions;
