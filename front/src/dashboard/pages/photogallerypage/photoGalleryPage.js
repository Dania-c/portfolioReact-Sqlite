import React from 'react'
import "./photoGalleryPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import { Button } from '@material-ui/core';
import AllPhotos from "../../../components/allphotos/AllPhotos";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function PhotoGalleryRecipient() {
    const history = useHistory();
        
const [photosState, setPhotosState] = useState([]);
    useEffect(() => {
        console.log("try to fetch photos ")
        fetch(`//localhost:8000/photos?orderBy=title`)

            .then(res => {
                return res.json();
            })
            .then(data => {
               
                console.log(" from effect result:" , data);
                setPhotosState(data.result);
                console.log(" from effect " + data.result);
            })

    }, [])
    const addClickPhoto=()=>{
        history.push(`/photodetailpage`)
    }
    return (
        <div className="recipientStandAlone">
            <div className="recipientStandAlone__Top" >
                <Button className="btn" onClick={addClickPhoto} >Add Photo</Button>
                {/* <Button className="btn" >More info</Button>
                <Button className="btn" >More info</Button> */}
            </div>
            <div >
                <AllPhotos images={photosState} />
            </div>
        </div>
    )
}

function PhotoGalleryPage() {
    return (
        <div className="PhotoGalleryPage">
            <SidebarAdmin />

            <div className="PhotoGalleryPage__recipient">
                <HeaderAdmin text={"Photo Gallery"} />
                <PhotoGalleryRecipient />
            </div>
        </div>
    )
}

export default PhotoGalleryPage
