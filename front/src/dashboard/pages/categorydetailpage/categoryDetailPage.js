import React ,{useState,useEffect} from 'react'
import "./categoryDetailPage.css"
import HeaderAdmin from "../../components/headeradmin/HeaderAdmin"
import SidebarAdmin from "../../components/sidebaradmin/SidebarAdmin"
import Single from '../../components/singlepicture/single'


function CategoryGalleryPageRecipient(props) {
    let idCategory=props.idCategory;
    const [description, setDescription] = useState('')
    const [imageURl, setImageURl] = useState('/images/pic4.jpeg')
    
    useEffect(() => {
        console.log("try to fetch categoryetailrecipient before categ")
       fetch(`//localhost:8000/categories/${idCategory}`)
   
         .then(res => {
           return res.json();
         })
         .then(data => {
           
           setDescription(data.result.description);
           setImageURl(data.result.imageURl);
                     
         })
   
     }, [])
    
    return  (

        <div className='generalContainer'>
            <section id='s1' className='photodetail'>
                <div className='container'>
                    {/* <form onSubmit={handleSubmit}> */}
                    <form>

                        <div className='form-group'>
                        <div class="PhotoDetailPage_button">
                                <button type='button' class="cancelButton">Cancel</button>
                                <button type='submit'class="saveButton">Save</button>
                            </div>
                        </div>
                        <div className='form-group'>
                        <label for="photo">Photo</label>
                            </div>
                             <div className='form-group'>
                             {/* <Single value={categoryimageURl}/> */}
                             <Single />
                             </div>
  {/* <SinglePhoto file={categoryimageURl}/> */}

                        <div className='form-group'>
                            <label for='description'>Description</label>
                            <textarea id='description' name='description'  ></textarea>
                            {/* {console.log("photo Description:",description)} */}
                        </div>

                    </form>
                </div>
            </section>

        </div>
);
}
function CategoryGalleryPage() {
    return (

        <div className="PhotoDetailPage">
            <SidebarAdmin />

            <div className="PhotoDetailPage__recipient">
                <HeaderAdmin text={"Edit Category"} />
                <CategoryGalleryPageRecipient/>

            </div>
        </div>
    )
}


export default CategoryGalleryPage
