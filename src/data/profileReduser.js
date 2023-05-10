const ADD_POST =  'ADD-POST'
const CHANGE_POST = 'CHANGE-POST'


let profileReduser = (state, action) => {
    if (action.type == ADD_POST) {
        let newPost = {
            post: state.newPostText,
            id: 4,
            likes: 10
        }

        state.postData.unshift(newPost)
        state.newPostText = ''
    } else if (action.type == CHANGE_POST) {
        state.newPostText = action.text
    }
    return state;
}

export default profileReduser;

export let addPostAC = () => {
    return {
        type: ADD_POST,
        id: 1,
    }
}

export let onChangeAC = (text) => {
    return {
        type: CHANGE_POST, 
        text: text,
    }
}