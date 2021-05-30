// import React from 'react'
// import "./categoryGalleryPage.css"
// import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
// import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
// function CategoryGalleryPage() {
//     return (
//         <div className="categoryGalleryPage">
//             <SidebarAdmin />

//             <div className="categoryGalleryPage__recipient">
//                 <HeaderAdmin text={"Category Gallery"} />
//                 <div>
//                     Category gallery
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default CategoryGalleryPage
import React from 'react'
import "../photogallerypage/photoGalleryPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import { Button } from '@material-ui/core';
// import AllPhotos from "../../../components/allphotos/AllPhotos";
import AllCategories from "../../components/allCategories/AllCategories"
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


function PhotoGalleryRecipient() {
    const history = useHistory();
        
const [categState, setCategState] = useState([]);
    useEffect(() => {
        console.log("try to fetch categ ")
        fetch(`//localhost:8000/categories`)

            .then(res => {
                return res.json();
            })
            .then(data => {
               
                console.log(" from effect result:" , data);
                setCategState(data.result);
                console.log(" from effect " + data.result);
            })

    }, [])
    const addClickCateg=()=>{
        history.push(`/categorydetailpage`)
    }
    return (
        <div className="recipientStandAlone">
            <div className="recipientStandAlone__Top" >
                <Button className="btn" onClick={addClickCateg} >Add Category</Button>
                {/* <Button className="btn" >More info</Button>
                <Button className="btn" >More info</Button> */}
            </div>
            <div >
                <AllCategories images={categState} />
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
