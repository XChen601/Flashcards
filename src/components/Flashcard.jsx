import { useState } from 'react'

const Flashcard = ({cardData, cardSide, flipCard}) => {

  return (
    <div className={`card difficulty-${cardData.difficulty} ${cardSide}`} onClick={flipCard}>
      {cardSide === 'front' ? cardData.question : cardData.answer}
    </div>

  )
}

export default Flashcard