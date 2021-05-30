import React from 'react'
import "./adminInfoPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import { Button } from '@material-ui/core';



function AdminInfoPage() {
    return (
<div className="adminInfoPage">
 <SidebarAdmin />
<div className="adminInfoPage__recipient">
<HeaderAdmin text={"Personal Info"}/>

<div className='AHcontainer'>
 <form className="AHform">
<div>
<div className="AHall-btn">
<div className="AHbtn">
<Button > save </Button> </div> 
<div className="AHbtn">
<Button> Cancel </Button> </div>
</div>
<div className='AHform-group'>
<label for='Phone' > Phone </label> 
<input type='text' id='Phone' name='Phone'></input>
</div>
<div className='AHform-group'>
<label for='email'> Email </label> 
<input type='email' id='email' name='email'></input>
</div>
<div className='AHform-group'>
<label for='Facebook'> Facebook </label> 
<input type='text' id='Facebook' name='Facebook'></input>
</div>
<div className='AHform-group'>
<label for='linkIn' > LinkIn </label>
 <input type='text' id='LinkIn' name='LinkIn'></input>
 </div>
 <div className='AHform-group'>
<label for='Gmail'> Facebook </label> 
<input type='text' id='Gmail' name='Gmail'></input> 
</div>
<div className='AHform-group'>
 <label for='Instagram'> Instagram </label>
 <input type='text' id='Instagram' name='Instagram'></input> 
</div>

<div className='AHform-group'>
   <label for='AboutUs'> About Us </label>
   <textarea id='AboutUs' name='AboutUs' cols='30' rows='10'> </textarea>
   </div>
   </div>
<div className="rightimg">
<img class="imageAboutUs" src="https://www.finextra.com/finextra-images/top_pics/xl/dark.jpeg" alt="black" />                                                                               </div>
 </form>
  </div> 
    </div>
    </div>
    )}

    export default AdminInfoPage