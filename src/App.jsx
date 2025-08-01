import React, { useState } from 'react';
import './App.css';

const questions = [
  {
    questionText: 'What is the capital of Brazil?',
    answerOptions: [
      { answerText: 'Rio de Janeiro', isCorrect: false },
      { answerText: 'São Paulo', isCorrect: false },
      { answerText: 'Brasília', isCorrect: true },
      { answerText: 'Salvador', isCorrect: false },
    ],
  },
  {
    questionText: 'Which planet is known as the Red Planet?',
    answerOptions: [
      { answerText: 'Venus', isCorrect: false },
      { answerText: 'Mars', isCorrect: true },
      { answerText: 'Jupiter', isCorrect: false },
      { answerText: 'Saturn', isCorrect: false },
    ],
  },
  {
    questionText: 'What is 5 + 7?',
    answerOptions: [
      { answerText: '10', isCorrect: false },
      { answerText: '12', isCorrect: true },
      { answerText: '15', isCorrect: false },
      { answerText: '9', isCorrect: false },
    ],
  },
  {
    questionText: 'Which animal is the largest land mammal?',
    answerOptions: [
      { answerText: 'Elephant', isCorrect: true },
      { answerText: 'Giraffe', isCorrect: false },
      { answerText: 'Hippopotamus', isCorrect: false },
      { answerText: 'Rhinoceros', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the main ingredient in guacamole?',
    answerOptions: [
      { answerText: 'Tomato', isCorrect: false },
      { answerText: 'Avocado', isCorrect: true },
      { answerText: 'Onion', isCorrect: false },
      { answerText: 'Cucumber', isCorrect: false },
    ],
  },
  {
    questionText: 'Which country hosted the 2016 Summer Olympics?',
    answerOptions: [
      { answerText: 'China', isCorrect: false },
      { answerText: 'Brazil', isCorrect: true },
      { answerText: 'Russia', isCorrect: false },
      { answerText: 'USA', isCorrect: false },
    ],
  },
  {
    questionText: 'What is the capital of Japan?',
    answerOptions: [
      { answerText: 'Osaka', isCorrect: false },
      { answerText: 'Kyoto', isCorrect: false },
      { answerText: 'Tokyo', isCorrect: true },
      { answerText: 'Hiroshima', isCorrect: false },
    ],
  },
];
function App(props) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
const [showSCore,setShowScore]=useState(false);
  const handleAnswerOption = (index, isCorrect) => {
    setAnswered(true);
    setSelectedAnswer(index);
    if (isCorrect) {
      setScore(score + 1);
    }
  };

  const NextQuestion = () => {
   
    setSelectedAnswer(null);
    setAnswered(false);
    const NextQuestion=currentQuestion+1;
    if(NextQuestion <questions.length){
       setCurrentQuestion(NextQuestion);
    }else{
        setShowScore(true)
    }
  
  };

  return (
    <div className="quiz-container">
      <div className="quiz-title">Quiz App</div>
      {showSCore ?
      <div> {score} of {questions.length} </div>: 
      <div className="question-text">{questions[currentQuestion].questionText}
      {questions[currentQuestion].answerOptions.map((option, index) => (
        <div
          key={index}
          className={`answer-option ${answered ? (index === selectedAnswer ? (option.isCorrect ? 'correct' : 'incorrect') : (option.isCorrect ? 'correct' : '')) : ''}`}
          onClick={() => handleAnswerOption(index, option.isCorrect)}
        >
          {option.answerText}
        </div>
      ))}
      <button 
        className="btn" 
        onClick={NextQuestion} 
        disabled={!answered}
      >
        Next Question
      </button>
      <p>Question {currentQuestion + 1} of {questions.length}</p>
    </div>}</div>
  );
}

export default App;