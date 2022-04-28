import React from 'react'
import s from './../Messages.module.css'

export default function MyMessage({message, date, time}) {
    return (
        <div>
            <div className={s.message_my}>
              <div className={s.message_body}>{message}</div> 
              <span>{date}</span><span>{time}</span> 
             
        </div>
        </div>
    )
}
