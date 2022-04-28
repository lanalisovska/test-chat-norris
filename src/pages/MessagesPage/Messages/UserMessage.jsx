import React from 'react'
import s from './../Messages.module.css'

export default function UserMessage({message, date, imgUser, time}) {
    return (
        <div>
            <div className={s.message}> <div className={s.flex_wrapper}> 
             <img src={imgUser} alt='user'/> 
                     <div className={s.message_body}>{message}</div> </div> 
                     <span> {date}</span><span>{time}</span>
                      </div>
        </div>
    )
}
