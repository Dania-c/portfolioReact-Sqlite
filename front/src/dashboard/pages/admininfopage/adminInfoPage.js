import React ,{useState,useEffect} from 'react'
// import React from 'react'
import "./adminInfoPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import { Button } from '@material-ui/core';

function AdminInfoPage(props) {
  let idAdmin = props.match.params.id;
  console.log("idAdmin from sub is:",idAdmin)
  const [phoneNb,setPhone] =  useState('');
  const [linkdIn, setLinkdIn] = useState('')
  const [facebook, setFacebook] = useState('')
  const [twitter, setTwitter] = useState('')
  const [insta,setInsta] =useState('');
  const [gmail, setGmail] = useState('')
  // const [email, setEmail] = useState('')
  const [aboutUs, setAboutUs] = useState('')
  const [testdata, setTestdata] = useState(null)
  //localhost:8000/admininfo/update/1?phoneNb='123'&linkdIn='hello'&facebook='facebook`&twitter='twitter'&insta='insta'&gmail='gmail'&aboutUs='aboutUs',{
       
  useEffect(() => {
       console.log("try to fetch adminInfoPageRecipient before categ",idAdmin)
      fetch(`//localhost:8000/admininfo/1`)
  
        .then(res => {
          console.log("result:::",res)
          return res.json();
        })
        .then(data => {
          setPhone(data.result[0].phoneNb);
          setLinkdIn(data.result[0].linkdIn);
          setFacebook(data.result[0].facebook);
          setTwitter(data.result[0].twitter);
          setInsta(data.result[0].Insta);
          setGmail(data.result[0].gmail);
          // setEmail(data.result[0].email);
          setAboutUs(data.result[0].AboutUs);
          setTestdata(data.result[0]);
          console.log("test data masalan",data.result)
          console.log("test data phone",data.result[0].phoneNb)
        })
  
    }, [])
    const handleSubmit = (e) =>{
      e.preventDefault();
      // const aAdmin = {phoneNb,email,linkdIn,facebook,twitter,insta,gmail,aboutUs}
      const aAdmin = {phoneNb,linkdIn,facebook,twitter,insta,gmail,aboutUs}
      console.log("idAdmin :",1)
      console.log("idAdmin ==1 :",idAdmin ==1)
      console.log("aAdmin , ",aAdmin);
      console.log("JSON.stringify(aAdmin): ",JSON.stringify(aAdmin));
      fetch(`//localhost:8000/admininfo/update/1?phoneNb=${phoneNb}&linkdIn=${linkdIn}&facebook=${facebook}&twitter=${twitter}&gmail=${gmail}&Insta=${insta}&AboutUs=${aboutUs}`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(aAdmin)
            }).then(()=>{console.log("in update console")})
        }

    return (
<div className="adminInfoPage">
 <SidebarAdmin />
<div className="adminInfoPage__recipient">
<HeaderAdmin text={"Personal Info"}/>

<div className='AHcontainer'>
 <form className="AHform" onSubmit={handleSubmit}>
<div>
<div className="AHall-btn">
<div className="AHbtn">
<Button type='submit'> save </Button> </div> 
<div className="AHbtn">
<Button> Cancel </Button> </div>
</div>
<div className='AHform-group'>
<label for='Phone' > Phone </label> 
<input type='text' id='Phone' name='Phone' value={phoneNb} onChange={e => setPhone(e.target.value)}></input>
{console.log("see phone number",phoneNb)}
</div>
{/* <div className='AHform-group'>
<label for='email'> Email </label> 
<input type='email' id='email' name='email' value={email} onChange={e => setEmail(e.target.value)}></input>
</div> */}
<div className='AHform-group'>
<label for='Facebook'> Facebook </label> 
<input type='text' id='Facebook' name='Facebook' value={facebook} onChange={e => setFacebook(e.target.value)}></input>
</div>
<div className='AHform-group'>
 <label for='Twitter'> Twitter </label>
 <input type='text' id='Twitter' name='Twitter' value={twitter} onChange={e => setTwitter(e.target.value)}></input> 
</div>
<div className='AHform-group'>
<label for='linkIn' > LinkedIn </label>
 <input type='text' id='LinkIn' name='LinkIn' value={linkdIn} onChange={e => setLinkdIn(e.target.value)}></input>
 </div>
 <div className='AHform-group'>
<label for='Gmail'> Gmail </label> 
<input type='text' id='Gmail' name='Gmail' value={gmail} onChange={e => setGmail(e.target.value)}></input> 
</div>
<div className='AHform-group'>
 <label for='Instagram'> Instagram </label>
 <input type='text' id='Instagram' name='Instagram' value={insta} onChange={e => setInsta(e.target.value)}></input> 
</div>

<div className='AHform-group'>
   <label for='AboutUs'> About Us </label>
   <textarea id='AboutUs' name='AboutUs' cols='30' rows='10' value={aboutUs} onChange={e => setAboutUs(e.target.value)}> </textarea>
   </div>
   </div>
<div className="rightimg">
<img class="imageAboutUs" src="https://www.finextra.com/finextra-images/top_pics/xl/dark.jpeg" alt="black" />                                                                               </div>
 </form>
  </div> 
    </div>
    </div>
    )}
{/* <adminInfoPageRecipient  idAdmin={idAdmin}/> */}
    export default AdminInfoPage
