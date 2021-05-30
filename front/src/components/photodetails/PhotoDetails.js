import React from 'react';
import './photoDetails.css';
import close from '../../assets/images/photos/pic9.jpg';
function PhotoDetails(props) {
    return (
        <div>
            <div className='containerInfo'>
                <div className='Head'>
                    <h2 id='title'>Title</h2>
                    <img id='close' src={close} alt='photo'></img>
                </div>
                <div id='pic'>
                    {/* <img src='https://picsum.photos/450/270' alt='photo'></img> */}
                    <img src={props.urls} alt='photo'></img>
                </div>
                <div className='descriptionUrban'>
                    <h3>{props.description}</h3>
                    <h3>Urban</h3>
                </div>
            </div>
        </div>
    )
}

export default PhotoDetails;
