import { useState } from 'react'

const Flashcard = ({cardData}) => {
  const [cardSide, setCardSide] = useState('front');

  const flipCard = () => {
    setCardSide(cardSide === 'front' ? 'back' : 'front');
    console.log(cardSide)
  };

  return (
    <div className="card" onClick={flipCard}>
      {cardSide === 'front' ? cardData.question : cardData.answer}
    </div>

  )
}

export default Flashcard