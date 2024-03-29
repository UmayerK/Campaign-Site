import React, { useState } from 'react';
import cookieImage from './assets/pngtree-cartoon-delicious-dessert-cookie-cookie-clipart-png-image_2360164-removebg-preview.png';
import scrollDownImage from './assets/Down-Arrow-PNG-HD.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleScrollToBottom = () => {
    window.scrollTo({
      top: window.innerHeight * 4 + 120, // Scroll down 400vh + 120vh
      behavior: 'smooth'
    });
  };

  const handleCookieClick = () => {
    setCount(count + 1); // Increment the count by 1
  };

  return (
    <>
      <h1>Vote Umayer For a Cookie!</h1>
      <div className="card">
        <img
          src={cookieImage}
          alt="Cookie"
          onClick={handleCookieClick} // Call handleCookieClick on click
          className="cookie-image spinning"
        />
        <p className="cookies">Cookies {count}</p> {/* Display the count */}
      </div>
      <h2 className="big">Vote Umayer For Head of Student Affairs</h2>
      <p className="move">
        Let me be your voice + enjoy your cookie.
      </p>
      {/* Add more content to extend the page height */}
      <div style={{ height: '120vh' }}></div>
     
      <img
        src={scrollDownImage}
        alt="Scroll Down"
        className="scroll-down-arrow"
        onClick={handleScrollToBottom}
      />
    </>
  );
}

export default App;
