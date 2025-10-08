// src/FlashcardList.jsx
import Flashcard from "./Flashcard";

export default function FlashcardList({ flashcards }) {
  return (
    <div className="flashcard-list">
      {flashcards.map((card) => (
        <Flashcard
          key={card.id}
          question={card.question}
          options={card.options}
          answer={card.answer}
        />
      ))}
    </div>
  );
}
