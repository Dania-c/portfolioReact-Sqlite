import React from 'react';
import SidebarAdminOption from './SidebarAdminOption';
import HomeIcon from '@material-ui/icons/Home';
import ImageIcon from '@material-ui/icons/Image';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import ViewListIcon from '@material-ui/icons/ViewList';
import { Button } from '@material-ui/core';
import "./SidebarAdminOption.css"
// import { useHistory } from "react-router-dom";
function SidebarAdmin() {
    // const history = useHistory();

    return (
        <div>
            <div className="sidebar">



                <SidebarAdminOption active text="admin Info" to="/admininfo/1" Icon={AccountBoxIcon} />
                <SidebarAdminOption text="Categories" to="/categorygallerypage" Icon={ViewListIcon} />
                <SidebarAdminOption text="Photos" to="/photogallerypage" Icon={PhotoLibraryIcon} />
                {/* <Button variant="outlined" className="sidebar__btn" fullWidth>hey</Button> */}
            </div>
        </div>
    )
}

export default SidebarAdmin;