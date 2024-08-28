import React, { useState } from 'react';
import "./Question.css";
import { question, options, correct } from './data.jsx';

function Question() {
  const [count, setCount] = useState(0); // Current question index
  const [feedback, setFeedback] = useState(''); // Feedback message
  const [correctCount, setCorrectCount] = useState(0); // Number of correct answers
  const [wrongCount, setWrongCount] = useState(0); // Number of wrong answers
  const [quizEnded, setQuizEnded] = useState(false); // Flag to check if quiz has ended
  const [showConfetti, setShowConfetti] = useState(false); // Flag to control confetti display

  // Function to handle answer selection
  const handleAnswerClick = (selectedOption) => {
    if (quizEnded) return; // Do nothing if quiz has ended

    const isCorrect = options[count][selectedOption] === correct[count];

    // Update feedback message and counts
    if (isCorrect) {
      setFeedback('Correct!');
      setCorrectCount(prevCount => prevCount + 1);
    } else {
      setFeedback('Wrong answer!');
      setWrongCount(prevCount => prevCount + 1);
    }

    // Move to the next question after a short delay
    setTimeout(() => {
      if (count < question.length - 1) {
        setCount(prevCount => prevCount + 1); // Increment question index
        setFeedback(''); // Clear feedback message
      } else {
        setQuizEnded(true); // End the quiz
      }
    }, 1000); // Delay before moving to the next question (1000ms = 1 second)
  };

  // Check if all questions are answered correctly
  const allCorrect = correctCount === question.length;

  if (quizEnded) {
    return (
      <div className={`results-container ${allCorrect ? 'success' : ''}`}>
        {allCorrect ? (
          <div className="success-card">
            <h1>🎉 Yay! 🎉</h1>
            <p>All answers were correct! 🥳👏</p>
          </div>
        ) : (
          <>
            <h1 className="results-heading">Quiz Results</h1>
            <p className="results-text">Correct Answers: {correctCount}</p>
            <p className="results-text">Wrong Answers: {wrongCount}</p>
          </>
        )}
      </div>
    );
  }

  return (
    <>
      <div className="question-container">
        <h1 className="question-heading">Question number - {count + 1}</h1>
        <h1 className="question">{question[count]}</h1>
        <div className="main-options">
          <p className="answer-one" onClick={() => handleAnswerClick(0)}>{options[count][0]}</p>
          <p className="answer-two" onClick={() => handleAnswerClick(1)}>{options[count][1]}</p>
          <p className="answer-three" onClick={() => handleAnswerClick(2)}>{options[count][2]}</p>
          <p className="answer-four" onClick={() => handleAnswerClick(3)}>{options[count][3]}</p>
        </div>
        {feedback && <div className={`feedback ${feedback === 'Wrong answer!' ? 'wrong' : ''}`}>{feedback}</div>}
        {showConfetti && <div className="confetti-container"></div>}
      </div>
    </>
  );
}

export default Question;
