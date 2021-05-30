import React from 'react'
import "./HeaderAdmin.css"
function HeaderAdmin(props) {
    return (
        <div className="headerAdmin">
            <h1>Dashboard</h1>
            <p>{props.text}</p>
        </div>
    )
}

export default HeaderAdmin
