import React from 'react';
import { Link } from "react-router-dom";
import "./SidebarOption.css";
import { useHistory } from "react-router-dom";

function SidebarOption({ active, text, to, Icon }) {
    const history = useHistory();
    function click() {
        history.push({ to });
    }
    return (
        <div className={`sidebarOption ${active && 'sidbarOption--active'}`}>

            <Icon />
            <h2><Link style={{ textDecoration: 'none', color: 'inherit' }} to={to} >{text}</Link></h2>

            {/* <h2 onClick={click}>{text}</h2> */}
            {/* <h2 >{text}</h2> */}
        </div>
    )
}

export default SidebarOption;