import React from "react";
import Post from "./post/Post";



function Posts(props) {
    return (
        <div className="posts">
            <h2>My posts</h2>
            {props.postData.map(e => <Post message={e.post} key={e.id} likes={e.likes} />)}
            <input type="text" placeholder="enter the post" />
            <button>Add post</button>

        </div>
    )
}

export default Posts;