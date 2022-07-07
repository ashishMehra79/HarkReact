import Podcast from './Component/Podcast/Podcast';
import Signup from './Component/Signup/Signup';
import Footer from './Component/Footer/Footer'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Podcast />
      <Signup />
      <Footer />
    </Router>

    </>
  );
}

export default App;
