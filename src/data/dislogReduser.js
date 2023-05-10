
const ADD_MSG = 'ADD-MSG'
const CHANGE_MSG = 'CHANGE-MSG'


let dialogReduser = (state, action) => {
    if (action.type == ADD_MSG) {
            let newMsg = {
                message: state.newMsg,
                id: 4
            }
            state.dialogMsgs.unshift(newMsg)
            state.newMsg = ''
        } else if (action.type == CHANGE_MSG) {
            state.newMsg = action.text
        }

}


export default dialogReduser;

export let addMsgAC = () => {
    return {
        type: ADD_MSG,
        id: 1,
    }
}

export let changeMsgAC = (msg) => {
    return {
        type: CHANGE_MSG,
        text: msg,
    }
}