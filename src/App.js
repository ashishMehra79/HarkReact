import Podcast from './Component/Podcast/Podcast';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer'
import './App.css';
import PopupCards from './Component/PopupCards/PopupCards';
import React, {useState} from 'react';
// import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <>
{/* //     <Router> */}
    <div className= 'popup-container'>
    {(!buttonPopup) ?
    <button onClick= {()=>setButtonPopup(true)}>Share
      <i className= 'fa-solid fa-chevron-down chevron'></i>
    </button>
    :
    <button onClick= {()=>setButtonPopup(false)}>Share
      <i className= 'fa-solid fa-xmark xmark'></i>
    </button>
    }
    </div>
    <PopupCards trigger = {buttonPopup}/>
      <Podcast />
      <Signup />
      <Footer />
{/* //     </Router> */}

    </>
  );
}

export default App;
