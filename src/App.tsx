import React, { useState } from 'react';
import face from './assets/face.png';
import './App.css';

function App() {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <div className="App">
        {isClicked ? <>
            <div className='page'/>
            <a className='pay' href='https://buy.stripe.com/5kA2bh5xN6XG8gwbII' target="_blank" rel="noopener noreferrer">JOIN THE CULT</a>
            </>
          : <button type='button' className='enter' onClick={() => 
          setIsClicked(true)}>
            <div className='rotate'>
              <img  src={face} className="App-logo" alt="face" />
            </div>
        </button>
        }
    </div>
  );
}

export default App;
