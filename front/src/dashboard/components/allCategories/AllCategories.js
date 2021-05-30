import React from 'react'
import { Link } from 'react-router-dom';
import "./allCategories.css"

function AllCategories(props) {

  // const images = props.images.map(({ id, imageURl, description }) => {
    const images = props.images.map(({ id, imageURl, description }) => {
    let isAdmin = true;

    return (
      <div className="maindiv">
        {/* <Link to={`/photodetails/${id}`}>
          <img key={id} src={urls} alt={description} />

          <p className="desc">ana :{description}</p></Link> */}
        {
          isAdmin
            ? <Link to={`/categorydetailpage/${id}`}>
              <img key={id} src={imageURl} alt={description} />
              <p className="desc">{description}</p></Link>
            : <Link to={`/photodetails/${id}`}>
              <img key={id} src={imageURl} alt={description} />
              <p className="desc">{description}</p></Link>
        }
      </div>
    )
  })

  return <div className="image-list">{images}</div>;
}

export default AllCategories;