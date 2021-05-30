import React from 'react'
import { useHistory } from "react-router-dom";
import "./landingPage.css"

function LandingPage() {
    const history = useHistory();
    const landingPic ="/images/pic4.jpeg"
    function Goto_CLick() {
        history.push("/homepage");
        
        }
    return (
        <div className="landingP" >
            <img src={landingPic} alt="mm" />
            <div className="description">
                <p >Welcome to Marwa Hodeib's Portfolio</p>
            </div>
            <div className="mainbutton">
                <button onClick={Goto_CLick}>Portfolio</button>
            </div>
        </div>
    )
}

export default LandingPage
