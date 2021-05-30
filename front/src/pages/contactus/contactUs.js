import React from 'react';
import './contactUs.css'
import SideBar from '../../components/sidebar/SideBar'
import CategoriesPanel from '../../components/categoriespanel/CategoriesPanel'
import MapContainer from './map'
import  emailjs from 'emailjs-com';

// import Map from './map'
 function ContactUsComp() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_arvst44', 'template_d91obsh', e.target, 'user_ULPPmk4Ct9tIrtF9H9IU0')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
    }
    return (
        <div>
            <div className='HgeneralContainer'>
                <div id='s1' className='contactUs'>
                        <form onSubmit={sendEmail}>

                        <div className='form-group'>
                                <label for='subject'>Subject</label>
                                <input type='text' id='subject' placeholder='subject' name='subject'></input>
                            </div>

                            <div className='form-group'>
                                <label for='Name'>Name</label>
                                <input type='text' id='Name' placeholder='name' name='name'></input>
                            </div>

                            <div className='form-group'>
                                <label for='email'>Email</label>
                                <input type='text' id='email' placeholder='Email Address' name='email'></input>
                            </div>

                            <div className='form-group'>
                                <label for='message'>Message</label>
                                <textarea id='message' placeholder='your message' name="message" cols='30' rows='10'></textarea>
                            </div>
                            <button type='submit' value='Send Message'>Submit</button>
                        </form>
                    </div>
                    <div id='s2' className='mapContainer'>
                    <MapContainer />
                      {/* <Map /> */}
                    </div>
                </div>
                <div className='info'>
                    <p>Phone:123456</p>
                    <p>Email:Portfolio@portfolio.com</p>
                    </div>
            </div>
    );
}

function contactUs() {
    return (
        <div className='containerComponent'>
        <div className="contactmainPage">

            <CategoriesPanel />
            </div>

            <div className="contactdownPage">
                <SideBar />
                <ContactUsComp />

        </div>
        </div>
    );
}
export default contactUs;

