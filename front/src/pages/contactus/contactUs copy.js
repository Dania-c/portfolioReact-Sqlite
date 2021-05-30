import React from 'react';
import './contactUs.css'
import SideBar from '../../components/sidebar/SideBar'
import CategoriesPanel from '../../components/categoriespanel/CategoriesPanel'
import MapContainer from './map'
// import Map from './map'
function ContactUsComp() {
    return (
        <div>
            <div className='HgeneralContainer'>
                <div id='s1' className='contactUs'>
                        <form>

                            <div className='form-group'>
                                <label for='firstName'>First Name</label>
                                <input type='text' id='firstName' name='firstName'></input>
                            </div>

                            <div className='form-group'>
                                <label for='lastName'>lastName</label>
                                <input type='text' id='lastName' name='lastName'></input>
                            </div>

                            <div className='form-group'>
                                <label for='email'>Email</label>
                                <input type='email' id='email' name='email'></input>
                            </div>

                            <div className='form-group'>
                                <label for='message'>Message</label>
                                <textarea id='message' name='message' cols='30' rows='10'></textarea>
                            </div>
                            <button type='submit'>Submit</button>
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

