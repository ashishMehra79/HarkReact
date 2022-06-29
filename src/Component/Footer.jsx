import './Footer.css'
function Footer(){
    return(
        <footer>
            <div className="footer-top">
                <div>

                </div>
                <div className="footer-top-middle">
                    <h4>Get access to powerful podcast moments from 100s of top rated shows</h4>
                    <p>Download the app to create your own mixtape list of your interests and topics, plus hundreds of curated harklists for your listening pleasure wherever you are</p>
                </div>
                <div className="test">
                    <button type="submit">
                        <div className="btn">
                            <i className="fa-brands fa-apple    fa-3x"></i>
                            <div className ='btn-text'>
                                <p>Download on the</p>
                                <h3>App Store</h3>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="logos">
                    <i className="fa-brands fa-twitter fa-2x"></i>
                    <i className="fa-brands fa-instagram fa-2x"></i>
                    <i className="fa-brands fa-facebook-square fa-2x"></i>
                </div>
                <div className="footer-bottom-list">
                    <ul>
                        <li>Why Hark</li>
                        <li>Legal</li>
                        <li>Contact</li>
                        <li>Press & Media</li>
                        <li>&copy; Hark Audio, Inc.</li>
                    </ul>   
                </div>
            </div>
        </footer>
    )
}

export default Footer;