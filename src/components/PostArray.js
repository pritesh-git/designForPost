import React from 'react'
import { IoMdShare } from 'react-icons/io'
import { GrLike } from 'react-icons/gr'
import { GoComment } from 'react-icons/go'
import { BsDot } from 'react-icons/bs'
import postData from '../assets/postData.json'

const PostArray = () => {
  return (
    <div className="p-1 d-flex align-content-start flex-wrap bg-primary">
      {postData.postDetail.map((el, i) => (
        <div
          className="w-75 h-25 m-5 rounded-lg shadow-lg rounded bg-white"
          key={i}>
          <div className="ps-1 d-flex flex-row rounded-lg shadow-lg bg-white rounded">
            <img
              src={el.PicturePost}
              alt="Avatar"
              className="md-avatar rounded-circle m-2"
              style={{ width: '50px', height: '50px' }}
            />
            <div className="d-flex flex-column">
              <span className="text-primary font-weight-bold mt-2">
                {el.Name}
              </span>
              <small className="text-muted">
                {el.DatePost}
                <BsDot />
                {el.TimePost}
              </small>
            </div>
          </div>
          <div className=" p-2 rounded-lg shadow-lg bg-white rounded m-1">
            {el.content}
          </div>
          <div className="w-100 px-5 d-flex justify-content-between rounded-lg shadow-lg bg-white rounded">
            <button className="p-2 btn btn-light text-primary">
              <GrLike /> {el.LikeCount} Like
            </button>
            <button className="p-2 btn btn-light text-primary">
              <GoComment /> {el.CommentCount} Comment
            </button>
            <button className="p-2 btn btn-light text-primary">
              <IoMdShare /> {el.ShareCount} Share
            </button>
          </div>
          <div className="w-100 p-2 overflow-auto">
            {el.CommentList != null ? (
              el.CommentList.map((cmnt, cIndex) => (
                <div
                  className="w-100 p-1 d-flex shadow-lg flex-row rounded-lg bg-white"
                  key={cIndex}>
                  <img
                    src={cmnt.Picture}
                    alt="Avatar"
                    className="md-avatar shadow-lg rounded-circle ms-1 me-1"
                    style={{ width: '40px', height: '40px' }}
                  />
                  <div className="d-flex flex-column ps-2 w-100 rounded-lg shadow-lg bg-white rounded">
                    <p className="m-0">
                      <span className="text-primary font-weight-bold me-2">
                        {cmnt.name}
                      </span>
                      {cmnt.commentDetail}
                    </p>
                    <small className="text-muted">{cmnt.commentTime}</small>
                  </div>
                </div>
              ))
            ) : (
              <div></div>
            )}
            <div className="w-100 p-1 d-flex flex-row">
              <img
                src={el.PicturePost}
                alt="Avatar"
                className="md-avatar rounded-circle ms-1 me-2"
                style={{ width: '40px', height: '40px' }}
              />
              <input
                type="text"
                className="border border-primary rounded-pill ps-2 w-100"
                placeholder="Write Comment"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostArray
