import React, { useState } from 'react';
import './App.css';
import './index.css'
import content from './content.jsx';

const App = () => {

  /* State variable for cardIndex number */
  const [cardIndex, setCardIndex] = useState(0);

  /* State variable for whether card is flipped or not */
  const [isFlipped, setIsFlipped] = useState(false);

  const [currentAnswer, setCurrentAnswer] = useState('');
  
  const [correct_answer, setCheckedAnswer] = useState('');

  const [inputValue, setInputValue] = useState('');

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }
  
  const handleNextCard = () => {
    const nextIndex = (cardIndex + 1 + content.length) % content.length;
    setCardIndex(nextIndex);
    setCurrentAnswer('');
    setCheckedAnswer('');
    setIsFlipped(false);
    
  }

  const handlePrevCard = () => {
    const prevIndex = (cardIndex - 1 + content.length) % content.length;
    setCardIndex(prevIndex);
    setCurrentAnswer('');
    setCheckedAnswer('');
    setIsFlipped(false);
  }

  const handleShuffle = () => {
    const randomIndex = Math.floor(Math.random() * content.length);
    setCardIndex(randomIndex);
    setCurrentAnswer('');
    setCheckedAnswer('');
    setIsFlipped(false);
  }

  const onCheckAnswer = (e) => {

    e.preventDefault();

    if (content[cardIndex].capital.toLowerCase() === currentAnswer.toLowerCase()) {
      setCheckedAnswer('correct');
    }
    else {
      setCheckedAnswer('wrong');

    }
  }

  const resetTextInput = () => {
    setInputValue('');
  }


  return(
    <>
      <div className="App">
        <div className="header">
          <h1>Welcome to the 50 States Flashcards!</h1>
          <h4>Do you know your US States and Capitals? Test your knowledge with these interactive flashcards and find out!</h4>
          <h5>Total Number of Cards: {content.length}</h5>
          <div className={`flashcard ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
            <div className={isFlipped ? 'back' : 'front'}>
              <p>{isFlipped ? content[cardIndex].capital : `What is the capital of ${content[cardIndex].st}?`}</p>
            </div>
          </div>
        </div>
        <form onSubmit={onCheckAnswer}>
          <label>
                  <strong>Guess the answer here: </strong>
                  <input 
                    type="text"
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    id={correct_answer}/>
          </label>
              <input type="submit" value="Submit Guess"/>
        </form>
        <div className="button-container">
            <button onClick={handlePrevCard}>←</button>
            <button onClick={handleNextCard}>→</button>
            <button onClick={handleShuffle}>Shuffle Cards</button>
        </div>
      </div>
    </>
  )
}

export default App
