import React from 'react'
import fillVal from '../assets/fillVal.json'
import { IoIosThumbsUp, IoIosText, IoIosSend } from 'react-icons/io'
const CardArray = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 bg-primary p-4">
      {fillVal.fills.map((val, i) => (
        <div className="card m-2 mx-5 p-2 h-50" key={i}>
          <img
            className="card-img-top"
            style={{ height: '10rem' }}
            src={val.Num}
            alt="Click to load"
          />
          <div className="card-body p-1">
            <h3 className="card-title">{val.Name}</h3>
            <p className="card-text text-dark">{val.Post}</p>
            <p className="d-flex justify-content-between m-0">
              <button className="btn btn-link m-0 p-0">
                <IoIosThumbsUp /> {val.Like} Likes
              </button>
              <button className="btn btn-link m-0 p-0">
                <IoIosText /> {val.Comment} Comment
              </button>
              <button className="btn btn-link m-0 p-0">
                <IoIosSend /> {val.Share} Share
              </button>
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CardArray
