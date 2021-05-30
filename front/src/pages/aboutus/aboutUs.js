import React from 'react'
import SideBar from '../../components/sidebar/SideBar'

import CategoriesPanel from '../../components/categoriespanel/CategoriesPanel'
import './aboutUs.css'
import { useEffect, useState } from "react";

function AboutusPageDetail(params) {
    const [theabout, setTheabout] = useState(null);
    useEffect(() => {
       
        fetch(`//localhost:8000/admininfo/${1}`)
          // fetch('https://jsonplaceholder.typicode.com/users/1')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTheabout(data.result[0]);
          })
    
      }, [])

    
    return (
        <div className="p-us">
            {/* <p>about us <br/>
            Here tou can fread more about us
            </p> */}
            {theabout && <p>{theabout.AboutUs} </p>}
      {!theabout && <p>loading ...</p>}
            <img class="img2" src="https://www.finextra.com/finextra-images/top_pics/xl/dark.jpeg" alt="black" />

        </div>

    )

    
}

function AboutUs() {
    return (

        <div className="aboutmainPage">

            <CategoriesPanel />

            <div className="aboutdownPage">
                <SideBar />
                <AboutusPageDetail />

            </div>
        </div>

    )
}

export default AboutUs
