// import Podcast from './Component/Podcast/Podcast';
// import Signup from './Component/Signup/Signup';
// import Footer from './Component/Footer/Footer'
import './App.css';
import PopupCards from './Component/PopupCards/PopupCards';
import React, {Component} from 'react'


class App extends Component{
  constructor() {
    super();
    this.state = {
      buttonPopup : false
    }
  }

  openCard(){
    this.setState({
        buttonPopup: true
      })
  }

  closeCard(){
    this.setState({
        buttonPopup: false
      }) 
  }
  render(){
    return(
    <>
        <div className= 'popup-container'>
        {(!this.state.buttonPopup) ?
        <button onClick={()=>this.openCard()}>Share
          <i className= 'fa-solid fa-chevron-down chevron'></i>
        </button>
        :
        <button onClick={()=>this.closeCard()}>Share
          <i className= 'fa-solid fa-xmark xmark'></i>
        </button>
        }
        </div>
        <PopupCards trigger={this.state.buttonPopup}/>
          {/* <Podcast /> */}
          {/* <Signup /> */}
          {/* <Footer /> */}
      </>
      );
  }


}

export default App;
