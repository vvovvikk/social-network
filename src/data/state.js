import burunov from "../img/Sergey_Burunov.jpg";
import tohatjan from "../img/HrantTokhatyan.jpg";
import truhin from "../img/MihailTruhin.jpg";
import profileReduser from "./profileReduser";
import dialogReduser from "./dislogReduser";


let store = {

    _state: {

        profilePage: {
            postData: [
                { post: "Hi, world!", id: 1, likes: 2 },
                { post: "HI`m Elon Mask, really", id: 2, likes: 8 },
                {
                    post: "Give me some bitcoins",
                    id: 3,
                    likes: 10
                },

            ],
            newPostText: 'Hello',
        },
        dialogsPage: {
            dialogNames: [
                {
                    name: 'Иван Иванов',
                    id: 1
                },
                {
                    name: 'Дональд Трамп',
                    id: 2
                },
                {
                    name: 'Билл Гейтс',
                    id: 3
                },
            ],

            dialogMsgs: [
                {
                    message: 'Привет, как дела?',
                    id: 1
                },
                {
                    message: 'Lorem ipsum dolor ',
                    id: 2
                },
                {
                    message: 'Жду мой новый чип',
                    id: 3
                },
            ],
            newMsg: 'Новое сообщение'
        },
        navBar: {
            friends: [
                {
                    name: 'Сергей Бурунов',
                    img: burunov,
                    id: 1
                },
                {
                    name: 'Грант Тохатян',
                    img: tohatjan,
                    id: 2
                },
                {
                    name: 'Михаил Трухин',
                    img: truhin,
                    id: 3
                },
            ]
        },
    },

    // addPost(postText) {
    //     let newPost = {
    //         post: postText,
    //         id: 4,
    //         likes: 10
    //     }

    //     this._state.profilePage.postData.unshift(newPost)
    //     this._state.profilePage.newPostText = ''
    //     this.rerenderTree(this._state)
    // },

    // onChangePost(text) {
    //     this._state.profilePage.newPostText = text
    //     this.rerenderTree(this._state)
    // },

    // addMsg(msgText) {
    //     let newMsg = {
    //         message: msgText,
    //         id: 4
    //     }
    //     this._state.dialogsPage.dialogMsgs.unshift(newMsg)
    //     this._state.dialogsPage.newMsg = ''
    //     this.rerenderTree(this._state)
    // },

    // onChangeMsg(text) {
    //     this._state.dialogsPage.newMsg = text
    //     this.rerenderTree(this._state)
    // },

    rerenderTree() {
        console.log('Заглушка');
    },

    subscribe(observer) {
        this.rerenderTree = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReduser(this._state.profilePage, action)
        this._state.dialogsPage = dialogReduser(this._state.dialogsPage, action)

        this.rerenderTree(this._state)


    },



}


export default store;