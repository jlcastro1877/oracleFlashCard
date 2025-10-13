// src/Flashcard.jsx
import { useState } from "react";

export default function Flashcard({ question, options, answer }) {
  const [selected, setSelected] = useState(null); // opção clicada
  const [showAnswer, setShowAnswer] = useState(false); // mostrar feedback

  const handleClick = (option) => {
    if (!showAnswer) {
      setSelected(option);
      setShowAnswer(true);
    }
  };

  return (
    <div className="flashcard">
      <h3>{question}</h3>
      <ul className="options-list">
        {options.map((option, idx) => (
          <li
            key={idx}
            className={`option ${
              showAnswer
                ? option === answer
                  ? "correct"
                  : option === selected
                  ? "wrong"
                  : ""
                : ""
            }`}
            onClick={() => handleClick(option)}
          >
            {option}
          </li>
        ))}
      </ul>
      {showAnswer && (
        <p className="answer-text">
          {selected === answer ? "✔ Correct!" : `✖ Wrong! Correct: ${answer}`}
        </p>
      )}
    </div>
  );
}