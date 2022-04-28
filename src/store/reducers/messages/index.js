import UserService from "../../../api/api"
import Bella from './../../../images/Bella.jpeg'
import Buddy from './../../../images/BUDDY.jpeg'
import Leo from './../../../images/LEO.jpeg'
import Max from './../../../images/MAX.jpeg'


const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const RETURN_JOKE = 'RETURN_JOKE'




const initialState = {
    users: [
        {id:1, username: 'Bella', status: false, image: Bella, messages: 
        [{id: 1,username: 'Bella', message:'Hi, my name is Bella!', date: new Date( 2022, 3, 24).toDateString(), time: new Date(2022, 3, 24, 22,20).toLocaleTimeString()}, 
        {id: 2,username: 'Me', message: 'I am glad to see you', date: new Date( 2022, 3, 25).toDateString(), time: new Date(2022, 3, 24, 23,20).toLocaleTimeString()}
    ], lastDateMess: []},

        {id:2, username: 'Buddy', status: false, image: Buddy, messages: 
        [{id: 1,username: 'Buddy', message:'Hi, my name is Buddy!', date: new Date(2022, 3, 24).toDateString(), time: new Date(2022, 3, 24, 21,20).toLocaleTimeString()},
         {id:2, username: 'Buddy', message:'What you do!', date: new Date(2022, 3, 25).toDateString(), time: new Date(2022, 3, 24, 23,20).toLocaleTimeString()  }],
         lastDateMessage: []
        },

        {id:3, username: 'Leo', status: false, image: Leo, messages: 
        [{id:1,username: 'Leo', message:'Hi, my name is Lei!', date: new Date(2022, 3, 23).toDateString(), time: new Date(2022, 3, 24, 22,20).toLocaleTimeString()},
         {id: 2,username: 'Leo',message:'how you!', date: new Date(2022, 3, 25).toDateString(), time: new Date(2022, 3, 24, 22,20).toLocaleTimeString()}  ],
         lastDateMessage: []},

        {id:4, username: 'Max', status: false, image: Max, messages: 
        [{id: 1, username: 'Max', message:'Hi, my name is Max!', date: new Date(2022, 3, 25).toDateString(), time: new Date(2022, 3, 24, 22,20).toLocaleTimeString()},  ], 
        lastDateMessage: []},
    ]
}


export default function  messagesReducer(state = initialState, action) {
    switch(action.type){
        case ADD_NEW_MESSAGE:  return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, ...u.username, ...u.status, ...u.image, ...u.messages.push(action.newMessage), ...u.lastDateMessage}
                }
                return u
            })
        }
        case RETURN_JOKE:  return {
            ...state,
            users: state.users.map(u => {
                if (u.id === action.userId) {
                    return { ...u, ...u.username, ...u.status, ...u.image, ...u.messages.push(action.newJoke), ...u.lastDateMessage = action.newMessage.date}
                }
                return u
            })
        }
      
        default: 
        return state
    }
}

export const addNewMessage = (newMessage, userId) => ({ type:ADD_NEW_MESSAGE, newMessage, userId})
export const returnNewJoke = (newJoke, userId) => ({type: RETURN_JOKE, newJoke, userId})


export const returnJokeSendMessage = (newMessage, userId, username) =>  async (dispatch) => {
    const newMess = localStorage.getItem(`${newMessage.id}`)

    dispatch(addNewMessage(JSON.parse(newMess), userId)) 

    

    try {
        const response = await UserService.getChuckJoke()
        const newJoke = {
            id: response.data.id,
            username: username,
            date: new Date().toDateString(),
            time: new Date().toLocaleTimeString(),
            message: response.data.value
        }
         setTimeout(() => {
            dispatch(addNewMessage(newJoke, userId))
            localStorage.setItem('lastMess', newJoke.message)
        }, 2000) 

 
      
    }
    catch(e){
        console.log(e)
    }
}