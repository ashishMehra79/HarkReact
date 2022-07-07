import './/Signup.css';
function Signup(){
    return(
            <div className="signup-section">
                <h2>Stay up to date with the smartest,funniest and most intresting podcast hark clips in your inbox with our email newsletter</h2>
                <form>
                    <div className="input-type">
                        <input type="email" placeholder="Email" />
                    </div>
                    <div className="signup-button">
                        <button type="submit">Sign Up</button>
                    </div>
                </form>
                <p>By signing up, I consent to receive marketing communication from Hark</p>
            </div>
    )
}

export default Signup;