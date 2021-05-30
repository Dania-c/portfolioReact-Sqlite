import React ,{useState,useEffect} from 'react'
import "./photoDetailPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import Single from '../../components/singlepicture/single'
import SinglePhoto from '../../components/singlepicture/singlephoto'
import { pause } from '../../../utils';
// import axios from "axios";
// import PhotoCategoriesList from './photoCategoriesList'


   

function PhotoDetailRecipient(props){
    let idPhoto=props.idPhoto;
    console.log("idphoto from sub is:",idPhoto)
    const [title,setTitle] =  useState('');
    const [description, setDescription] = useState('')
    const [imageURl, setImageURl] = useState('')//useState('/images/pic4.jpeg')
    const [isLandingPage, setIsLandingPage] = useState(null)
    const [loading,setLoading] =useState(false);
    const [photos, setPhotos] = useState([])
//     const send = (event) => {
//         const data = new FormData();
//         data.append("title", title);
//         data.append("description", description);
//         data.append("imageURl", imageURl);
//         console.log(data);
    
//         axios
//       .post(`http://localhost:8080/photos/update/${idPhoto}`, data)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   };

    

    useEffect(() => {
         console.log("try to fetch photdetailrecipient before categ")
        fetch(`//localhost:8000/photos/${idPhoto}`)
    
          .then(res => {
            return res.json();
          })
          .then(data => {
            setTitle(data.result.title);
            setDescription(data.result.description);
            setImageURl(data.result.imageURl);
            setIsLandingPage(data.result.isLandingPage);
            // setPhotoCategories(data.result);//to adjust ;(
           console.log("imga from useeffect",imageURl)
          })
    
      }, [imageURl])

      const handleChangeCheck = (e) => {
        const { checked } = e.target
        // console.log("checkiiiiiiiing the check , e is :" ,e)
        setIsLandingPage(checked);
           
    }

    const createNewPhoto = async (params = {}) => {
        let { title, description, isLandingPage, imageURl } = params;
        let url = `//localhost:8000/photos/create/?title=${title}&description=${description}&isLandingPage=${isLandingPage}`;
        let paramsErr = "you need at least title or description properties to add a photo";
        if (!title || !description) throw new Error(paramsErr);
    
        let body = null;
        if (imageURl) {
          body = new FormData();
          body.append(`imageURl`, imageURl);
        }
    
        try {
          setLoading(true);
    
          await pause();
          const response = await fetch(url, { method: "POST", body });
          const result = await response.json();
    
          setLoading(false);
    
          if (result.success) {
    
            let newPhoto = result.result;
            let id = newPhoto.idPhoto;
            let statePhotos = [...photos];
    
            statePhotos.push({ id, title, description, isLandingPage, imageURl: newPhoto.title });
    
            // this.setState({ photos: statePhotos, title: "", description: "" ,isLandingPage : "0"});
            setPhotos(statePhotos);
            setTitle("");
            setDescription("");
            
            // toast("Photo added");
    
          } else {
            // toast.error("Cannot add Photo");
            // this.setState({ error: result.message });
          }
    
        } catch (err) {
        //   this.setState({ error_message: err })
        }

}

const handleSubmit = (e) =>{
    e.preventDefault();
    const aPhoto = {title,description,imageURl,isLandingPage}
    console.log("idPhoto :",idPhoto)
    console.log("idPhoto ==0 :",idPhoto ==0)
    console.log("aPhoto , ",aPhoto);
    console.log("JSON.stringify(aPhoto): ",JSON.stringify(aPhoto));
    let body = null;
    if (!idPhoto )  {
        body = new FormData();
        body.append(`imageURl`, imageURl);
        console.log("add :",aPhoto);
        fetch(`//localhost:8000/photos/createimg/?title=${title}&description=${description}&isLandingPage=${isLandingPage}`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(aPhoto)
             }).then(()=>{console.log("in create console")})

        // createNewPhoto(aPhoto);
    }
    else {
        body = new FormData();
        body.append(`imageURl`, imageURl);
        //fetch(`http://localhost:8000/photos/update/${idPhoto}?title=${title}&description=${description}&isLandingPage=${isLandingPage}`
        fetch(`http://localhost:8000/photos/updateimg/${idPhoto}?title=${title}&description=${description}&isLandingPage=${isLandingPage}`,{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(aPhoto)
            }).then(()=>{console.log("in update console")})
        }
}
    return(
        
        <div className='generalContainer'>
            <section id='s1' className='photodetail'>
                <div className='container'>
                    <form onSubmit={handleSubmit}>

                        <div className='form-group'>
                        <div class="PhotoDetailPage_button">
                                <button type='button' class="cancelButton">Cancel</button>
                                <button type='submit'class="saveButton">Save</button>
                            </div>
                            <label for='title'>Title</label>
                            <input type='text' id='title' name='title' value={title} onChange={e => setTitle(e.target.value)}></input>
                            {console.log("photo Title:",title)}
                        </div>

                        {/* <div className='form-group'>
                            <label for='category'>Category</label>
                            <input type='text' id='category' name='category'></input>
                        </div> */}
                      
                        <div className='form-group'>
                            <label for='description'>Description</label>
                            <textarea id='description' name='description' value={description}  onChange={e => setDescription(e.target.value)}></textarea>
                            {console.log("photo Description:",description)}
                        </div>
                        <div class="single_CheckBox">
                            <input  type="checkbox" checked={isLandingPage} id="CheckIsLandingPage" onChange={e => handleChangeCheck(e)}></input>
                            <label  for="CheckIsLandingPage">
                                is a Landing Page
                            </label>
                            {console.log("photoIsLandingPagen:",isLandingPage)}
                        </div>
                        
                        <div className='form-group'>
                            <label for="photo">Photo</label>
                        </div>
                         {/* <div className='form-group'>
                             <Single value={photoImageURl} />
                         </div> */}
                         <SinglePhoto file={imageURl}  onChange={(event) => {
                      const file = event.target.files[0];
                      setImageURl(file.name);}} />
                         {/* <input
                    type="file"
                    id="file"
                    accept=".jpg"
                    onChange={(event) => {
                      const file = event.target.files[0];
                      setImageURl(file.name);
                      console.log(" th file of img",file);
                      console.log(" th image",file.name);
                    }}
                  /> */}
                  {/* <input
                    type="file"
                    id="file"
                    accept=".jpg"
                    onChange={(event) => {
                      
                      setImageURl(event.target.files[0]);
                    //   console.log(" th file of img",file);
                      console.log(" th image",imageURl);
                    }}
                  /> */}
                    </form>
                </div>
            </section>
         
        </div>
);
}

function PhotoCategoriesList(props){
    let idPhoto = props.idPhoto;
    console.log("detaiiiiled : ",idPhoto);
    let [photoCategsState, setPhotoCategsState] = useState([]);
    

    useEffect(() => {
       
        fetch(`//localhost:8000/photocategs/${idPhoto}`)
    
          .then(res => {
            return res.json();
          })
          .then(data => {
           
                setPhotoCategsState(data.result);
          })
    
      }, [])

      const handleChangeCheck = (e) => {
        const { checked } = e.target
        console.log("checkiiiiiiiing the check , checked is :" ,checked)
        console.log("photoCategsState :",photoCategsState);
        // setPhotoCategsState.belongTo[0] =checked ? 1 : 0;
        setPhotoCategsState(checked);
        console.log("photoCategsState after:",photoCategsState);

    }

    return(
        
        <div className='PhotoDetailPage__CategList'>
          
                
                    {/* <form>  */}
                    {photoCategsState.map(({ idcategory, description, belongTo }) => {
                            return (
                            <div className="single_CheckBox">
                                 <form action="submit">
                                 
                                 <input  type="checkbox" checked={belongTo} id="CheckIsbelongTo" onChange={(e) => setPhotoCategsState(e.target.value)}></input>
                                        <label  for="CheckIsbelongTo">
                                        {description}
                                        </label>
                                        </form>
                            </div>

                            )
                    })}                    
                        
                    {/* </form> */}
                   
                
           
         
        </div>
);
}
function PhotoDetailPage(props) {
    let idPhoto = props.match.params.id;
    



    return (

        <div className="PhotoDetailPage">
            <SidebarAdmin />

            <div className="PhotoDetailPage__recipient">
                <HeaderAdmin text={"Photo Details"} />
                <div className="PhotoDetailPage__recipient2">
                    <PhotoDetailRecipient idPhoto={idPhoto}/>
                    <PhotoCategoriesList  idPhoto={idPhoto}/>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetailPage
