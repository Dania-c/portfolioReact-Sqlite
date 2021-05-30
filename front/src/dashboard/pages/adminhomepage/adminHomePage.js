import React from 'react'
import HeaderAdmin from '../../components/headeradmin/HeaderAdmin'
import SidebarAdmin from '../../components/sidebaradmin/SidebarAdmin'
import XPanel from '../../components/XPanel'
import "./adminHomePage.css";
function AdminHomePage() {
    return (
        <div className="adminHomePage">

            <SidebarAdmin />
            <div className="adminHomePage__rightPanel">
                <HeaderAdmin text={"Welcome to the Admin Panel"} />
                <XPanel />
            </div>

        </div>
    )
}

export default AdminHomePage
