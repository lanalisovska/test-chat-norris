import React from 'react'
import s from './ChatHeader.module.css'

export default function ChatHeader({username, imgUser}) {
    return (
        <div className={s.header_user}>
       <img alt='user'src={imgUser}/>
       {username}
             
        </div>
    )
}
