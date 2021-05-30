import React from 'react';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import ContactMailIcon from '@material-ui/icons/ContactMail';

import InfoIcon from '@material-ui/icons/Info';
import { Button } from '@material-ui/core';
import SocialPanel from '../socialpanel/SocialPanel'
import "./SidebarOption"
// import { useHistory } from "react-router-dom";
function SideBar() {
    // const history = useHistory();

    return (
        <div>
            <div className="sidebar">
                <SidebarOption active text="Home" to="/homepage" Icon={HomeIcon} />
                <SidebarOption text="About us" to="/aboutus" Icon={InfoIcon} />
                <SidebarOption text="Contact us" to="/contactus" Icon={ContactMailIcon} />
                <div id='social'><SocialPanel /></div>
            </div>
        </div>
        
         

    )
}

export default SideBar;