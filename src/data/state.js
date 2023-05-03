import burunov from "../img/Sergey_Burunov.jpg";
import tohatjan from "../img/HrantTokhatyan.jpg";
import truhin from "../img/MihailTruhin.jpg";
import rerenderTree from "../render";


let state = {

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
}

export let addPost = (postText) => {
    let newPost = {
        post: postText,
        id: 4,
        likes: 10
    }

    state.profilePage.postData.unshift(newPost)
    console.log(state);
    rerenderTree(state)
}

export let addMsg = (msgText) => {
    let newMsg = {
        message: msgText,
        id: 4
    }
    state.dialogsPage.dialogMsgs.unshift(newMsg)
    console.log(state);
    rerenderTree(state)
}

export default state;