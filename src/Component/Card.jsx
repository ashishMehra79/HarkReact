import './Card.css'
import image from './../Images/goku.jpeg';
function Card(){
    return(
            <div className="card">
                <div className="podcast-image-container">
                    <div className="podcast-image" id="first"></div>
                    <div className="podcast-image" id="second"></div>
                    <div className="podcast-image" id="third"></div>
                    <div className="podcast-image" id="fourth"></div>
                    <div className="podcast-image" id="fifth"></div>
                    <div>
                        <div className="toggle"></div>
                        <div className="toggle"></div>
                        <div className="toggle"></div>
                    </div>
                </div>
                <div className='text'>
                    <h2>Unleash Your Inner Optimist</h2>
                    <p>Smart approaches to finding hope, optimism and resilience</p>
                </div>
                <hr/>
                <div className="card-bottom">
                    <div className="user-details">
                        <div className="user-image">
                            <img src={image} alt=""/>
                        </div>
                        <div className="user-info">
                            <p className="user-name">Anna Oakes</p>
                            <p className="hark-editor">HARK EDITOR</p>
                        </div>
                    </div>
                    <div className="clip-details">
                        <div className="clip-info">
                            <p>9 CLIPS 37 MINS</p>
                        </div>
                        <div>
                            <i className="fa-solid fa-circle-play fa-2x" ></i>
                        </div>
                    </div>
                </div>
            </div>  
    )
}

export default Card;