import React from "react";
import Post from "./post/Post";


let postText = React.createRef()

function Posts(props) {
    let addPost = () => {
        props.addPost(postText.current.value)
    }
    return (
        <div className="posts">
            <h2>My posts</h2>
            {props.postData.map(e => <Post message={e.post} key={e.id} likes={e.likes} />)}
            <input type="text" ref={postText} placeholder="enter the post" />
            <button onClick={addPost}>Add post</button>

        </div>
    )
}

export default Posts;