import './Card.css'
import image from './../../Images/goku.jpeg';
import { useSelector } from 'react-redux';
import { createRef } from 'react';
function Card(){
    const cards = useSelector((state) => state.allHarklists.harklists);

    const renderCards = cards.map((data, key)=>{

        const {podcastImages, creator, series} = data;
        return(
            <>
            <div className="card">
                <div className="podcast-image-container">
                    <div className="podcast-image" id="first"><img src={podcastImages[0]} alt="" /></div>
                    <div className="podcast-image" id="second"><img src={podcastImages[1]} alt="" /></div>
                    <div className="podcast-image" id="third"><img src={podcastImages[2]} alt="" /></div>
                    <div className="podcast-image" id="fourth"><img src={podcastImages[3]} alt="" /></div>
                    <div className="podcast-image" id="fifth"><img src={podcastImages[4]} alt="" /></div>
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
                            <p className="user-name">{creator.name}</p>
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
            </>
        )
        })

    return(
        <div className='cards'>
            {renderCards}
        </div>            
    )
}

export default Card;

