import { useEffect, useState } from 'react';
import './App.css';
import face from './assets/face.png';

function App() {
  const [isClicked, setIsClicked] = useState(false)
  const [isSliding, setIsSliding] = useState(false)

  useEffect(() => {
    setTimeout(() => setIsClicked(true), 3000)
    setTimeout(() => setIsSliding(true), 5000)
  },[])

  return (
    <div className="App">
      <div className={`page ${isClicked ? "view" : "hidden"}`}>
        {isClicked && 
            <a className={`pay ${isSliding ? "slide-up" : ""}`} href='https://buy.stripe.com/5kA17dgcr2Hq8gwbIO' target="_blank" rel="noopener noreferrer">JOIN THE CULT</a>}
        </div>
        {!isClicked &&
        <button type='button' className='enter' onClick={() => 
          setIsClicked(true)}>
            <div className='rotate'>
              <img  src={face} className="App-logo" alt="face" />
            </div>
        </button>}
    </div>
  );
}

export default App;
