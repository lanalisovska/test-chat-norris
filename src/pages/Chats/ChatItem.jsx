import React, { useState } from 'react'
import s from './Chats.module.css'
import online_icon from './../../UI/icons/online_status.png'
import offline_icon from './../../UI/icons/offline_status.png'


const ChatItem = ({user, openNewChat, setId, messages, setImgUser}) => {

    const { username, id, image} = user
    const [statususer, setStatusUser] = useState(false)



    const openChat = (user) => {
       openNewChat(user)
       setStatusUser(true)
       setId(id)
       setImgUser(image)
    }
    return (
        <div className={s.userItem} onClick={() => openChat(user)}>
           
            <div><img src={image} alt='user' /></div>
            <div className={s.username}> {username}</div>
            <div className={s.satus_user}> {statususer
            ?<><img alt='online' src={online_icon}/><span>online</span></>
             : <><img alt='offline' src={offline_icon}/> <span>offline</span> </>}</div>
             
        </div>


    )
}


export default ChatItem 