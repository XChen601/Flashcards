import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './components/Flashcard';

function App() {
  const [cardNum, setCardNum] = useState(0);
  const [cardSide, setCardSide] = useState('front');

  const [answerInput, setAnswerInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(null);

  const cardsData = [
    {question: "What is the capital of Russia?", answer:"Moscow", difficulty:0},
    {question: "What is the process of water turning into vapor called?", answer:"Evaporation", difficulty:0},
    {question: "What is the tallest mammal on Earth?", answer:"Giraffes", difficulty:0},
    {question: "Who was the first person to step on the moon?", answer:"Neil Armstrong", difficulty:0},
    {question: "What is the process of a caterpillar turning into a butterfly called?", answer:"Metamorphosis", difficulty:1},
    {question: "Who wrote the Harry Potter book series?", answer:"J.K. Rowling", difficulty:1},
    {question: "What is the capital of Australia?", answer:"Canberra", difficulty:1},
    {question: "What is the process by which plants make their food called?", answer:"Photosynthesis", difficulty:1},
    {question: "In classical music, what instruments usually comprise a string quartet?", answer:"Two violins, viola and a cello", difficulty:2},
    {question: "In colonial America, what was the Sugar Act?", answer:"A tax on molasses and wine", difficulty:2}
  ]

  const nextCard = () => {
    if (cardNum === cardsData.length - 1) {
      setCardNum(0);
    } else {
      setCardNum(cardNum + 1);
    }
    setCardSide('front');
  };

  const randomCard = () => {
    let randomCardNum;
    do {
      randomCardNum = Math.floor(Math.random() * cardsData.length);
    } while (randomCardNum === cardNum);

    setCardNum(randomCardNum);

    setCardSide('front');
  }

  const prevCard = () => {
    if (cardNum === 0) {
      setCardNum(cardsData.length - 1);
    } else {
      setCardNum(cardNum - 1);
    }
    setCardSide('front');
  }

  const flipCard = () => {
    setCardSide(cardSide === 'front' ? 'back' : 'front');
    console.log(cardSide)
  };


  return (
    <>
      <h2 className='title'>Are You Smarter Than a 5th Grader?</h2>
      <p className='description'>Check out if you are smarter than a 5th grader!</p>
      <p>Question {cardNum+1}/{cardsData.length}</p>
      <Flashcard cardData={cardsData[cardNum]} cardSide={cardSide} flipCard={flipCard}/>
      <div>
        <label>Guess the answer: </label>
        <input value={answerInput} onChange={(e) => setAnswerInput(e.target.value)}
          style={{ borderColor: isCorrect === null ? 'white' : isCorrect ? 'green' : 'red' }}></input>
        <button onClick={(e) => {
          if (answerInput.toLowerCase() === cardsData[cardNum].answer.toLowerCase()) {
            setIsCorrect(true);
          } else {
            setIsCorrect(false);
          }
        }}>Check Answer</button>
      </div>
      <div>
        <button onClick={prevCard}>←</button>
        <button onClick={nextCard}>→</button>
        <button onClick={randomCard}>Random</button>
      </div>
    </>
  )
}

export default App
