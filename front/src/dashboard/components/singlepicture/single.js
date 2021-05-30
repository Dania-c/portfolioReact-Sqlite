import React, { Component } from 'react';
import './single.css';
import Singlephoto from './../../components/singlepicture/singlephoto';


export default class Single extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              
              <div className="card-body">
                <Singlephoto />
              </div>
            </div>
          </div>
          </div>
      </div>
    );
  }
}

