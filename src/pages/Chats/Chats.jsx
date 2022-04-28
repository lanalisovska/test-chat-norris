import React, {useState, useMemo} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {returnJokeSendMessage } from '../../store/reducers/messages'
import InputElement from '../../UI/Input/Input'
import Modal from '../../UI/Modal/Modal'
import MessagesPage from '../MessagesPage/MessagesPage'
import ChatItem from './ChatItem'
import s from './Chats.module.css'
import ChatHeader from './UsereHeader/ChatHeader'


function Chats() {
    
const [visibleChat, setVisibleChat] = useState(false)
const [modalVisible, setModalVisible] = useState(false)
const [messages, setMessages] = useState({})

const [username, setUserName] = useState('f')
const [searchQuery, setSearchQuery] = useState('')
const [imgUser, setImgUser] = useState('')
const [id, setId] = useState('')

const { users } = useSelector(state => state.messages)
const dispatch = useDispatch()

const openChat = (user) => {
    setVisibleChat(true)
    setMessages(user)
}

const searchedUserName = useMemo(() => {
    return users.filter(user => user.username.includes(searchQuery))
}, [searchQuery])




const sendMessage = (message) => {
    const newMessage = {
        id: new Date(),
        message: message,
        date: new Date().toDateString(),
        time: new Date().toLocaleTimeString(),
        username: 'Me'
    }
   localStorage.setItem(`${newMessage.id}`, JSON.stringify(newMessage))

    const userId = id
    dispatch(returnJokeSendMessage(newMessage, userId, username))
    setTimeout(() => {
        setModalVisible(true)
      }, 2500)
       setTimeout(() => {
           setModalVisible(false)
       }, 5000)
}
return (
    <div className={s.wrapper_messages}>
        <div className={s.userList}>  
        <input placeholder='username...' value={searchQuery} onChange={e  => setSearchQuery(e.target.value)}/> 

        {searchedUserName.map(user =>
        <ChatItem key={user.id} user={user} openNewChat={openChat} setId={setId}  messages={messages} 
             setImgUser={setImgUser}
             />
           )}
         </div>
        <div className={s.chat_wrapper}> {visibleChat 
        ? <>
           <ChatHeader username={username} imgUser={imgUser}/>
           <MessagesPage messages={messages} setUserName={setUserName} imgUser={imgUser} />
            <InputElement sendMessage={sendMessage} />
            {modalVisible ? <Modal>{username}</Modal>: ''}
            </>
        : <div> 
            <iframe title='gif'src="https://giphy.com/embed/26FxyQeyHXDXiuvio"></iframe> 
            <p>Choose chat </p>
            </div>} 
        </div>
    </div>
)

}

export default  Chats