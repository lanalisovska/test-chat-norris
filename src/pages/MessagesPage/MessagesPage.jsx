import React, { useEffect} from 'react'
import s from './Messages.module.css'
import MyMessage from './Messages/Message'
import UserMessage from './Messages/UserMessage'

const  MessagesPage = ({messages, setUserName, imgUser}) =>  {

const me = 'Me'
 useEffect(() => {
    setUserName(messages.username)
 }, [messages.username])
 
    return (
     <div className={s.messages_wrapper}>
    {messages.messages.map(m => 
         <div>
                {m.username === me
                  ? <div> <MyMessage  message={m.message} date={m.date} time={m.time}/></div> 
                  : <div>  <UserMessage message={m.message} date={m.date} time={m.time} imgUser={imgUser}/></div>
                 
                } 
            
            </div>
            )}
     </div>   
    )
}



export default MessagesPage