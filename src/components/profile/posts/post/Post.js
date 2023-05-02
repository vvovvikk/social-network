import React from "react";
import ava_mini from "../../../../img/elon_mini.jpg"
import "./post.css"

function Post(props) {
    return (
        <div className="post">
            <img src={ava_mini} alt="" />
            <span>Elon Mask</span>
            <p>{props.message}</p>
            <p className="likes">Likes: <span>{props.likes}</span></p>
        </div>
    )
}

export default Post;