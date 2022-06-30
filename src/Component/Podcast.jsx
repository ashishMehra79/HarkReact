import './Podcast.css'
import Card from './Card';
function Podcast(){

    const list = [
        {category:'Music'},
        {category:'Wellness'},
        {category:'Music'},
        {category:'Wellness'}
    ]

    function playlist(element){
        console.log(element.name)
    }

    function card(val){
        return(
            <Card/>
        )
    }
    return(
        <div className='podcast'>
            <div className="podcast-text">
                Discover new and popular podcasters, topics and intersts
            </div>
            <div className="options">
                <button name="Science">Science</button>
                <button  name="Wellness" >Wellness</button>
                <button  name="Health" >Health</button>
                <button  name="Sports" >Sports</button>
            </div>
            <div className="options">
                <button  name="Movies" >Movies</button>
                <button  name="Comedy" >Comedy</button>
                <button  name="Technology" >Technology</button>
            </div>
            <div className="options">
                <button  name="Music" >Music</button>
                <button  name="Books" >Books</button>
                <button  name="Foods & Drink" >Food & Drink</button>
                <button  name="Design" >Design</button>
            </div>
            <div className="options">
                <button  name="Travel" >Travel</button>
                <button  name="History" >History</button>
                <button  name="Climate Changes" >Climate Changes</button>
            </div>
            <div className="options">
                <button  name="Self Care" >Self Care</button>
                <button  name="Business" >Business</button>
                <button  name="News & Politics" >News & Politics</button>
            </div>



            <div className='options2'>
                <button href='#' name="Science">Science</button>
                <button  name="Wellness">Wellness</button>
                <button  name="Health">Health</button>
                <button  name="Sports">Sports</button>
                <button  name="Movies">Movies</button>
                <button  name="Comedy">Comedy</button>
                <button  name="Technology">Technology</button>
                <button  name="Music">Music</button>
                <button  name="Books">Books</button>
            </div>

            <div className='options2'>
                <button  name="Foods & Drink">Food & Drink</button>
                <button  name="Design">Design</button>
                <button  name="Travel">Travel</button>
                <button  name="History">History</button>
                <button  name="Climate Changes">Climate Changes</button>
                <button  name="Self Care">Self Care</button>
                <button  name="Business">Business</button>
                <button  name="News & Politics">News & Politics</button>
            </div>
            <div className='container'>
                { list.map(card) }
            </div>
        </div>
    )
}

export default Podcast;