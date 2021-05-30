import React from 'react'
import SideBar from "../../components/sidebar/SideBar";
import CategoriesPanel from "../../components/categoriespanel/CategoriesPanel";
import AllPhotos from "../../components/allphotos/AllPhotos";
import "./category_PhotosPage.css";
import { useEffect, useState } from "react";

function Category_PhotosPage(props) {

    let idCategory = props.match.params.id;
    // console.log("ana categ from categphotodetail:" , props.match.params.id)
    // console.log("ana Props from categphotodetail:" , props)
    const [categState, setCategState] = useState([]);
    useEffect(() => {
        console.log("try to fetch categ from categ-photo")
        fetch(`//localhost:8000/photosbycategory/${idCategory}`)

            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(" from effect see:" + data.match);
                console.log(" from effect result:" , data);
                setCategState(data.result);
                console.log(" from effect " + data.result);
            })

    }, [categState])
    
    
    return (
        <div className="categmainPage">

            <CategoriesPanel />

            <div className="categdownPage">
                <SideBar />
                {console.log("watch categstate ", categState)}
                <AllPhotos images={categState} />
                {/* {console.log("ana categ"+{idcategory})} */}
            </div>
        </div>

    )
}

export default Category_PhotosPage;
