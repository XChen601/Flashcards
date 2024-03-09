import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Flashcard from './components/Flashcard';

function App() {
  const [cardNum, setCardNum] = useState(0);
  const [cardSide, setCardSide] = useState('front');

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
    if (cardsData.length - 1 === cardNum) {
      setCardNum(0);
    } else {
      setCardNum(cardNum + 1);
    }
    setCardSide('front');
  };

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
      <h2>Are You Smarter Than a 5th Grader?</h2>
      <p>Question {cardNum+1}/{cardsData.length}</p>
      <Flashcard cardData={cardsData[cardNum]} cardSide={cardSide} flipCard={flipCard}/>
      <div>
        <button onClick={prevCard}>←</button>
        <button onClick={nextCard}>→</button>
      </div>
    </>
  )
}

export default App
