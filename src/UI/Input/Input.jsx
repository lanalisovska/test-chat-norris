import React, { useState } from 'react'
import s from './Input.module.css'
import btn_send from './../icons/send-button.png'

export default function InputElement({ sendMessage }) {

    const [message, setMessage] = useState('')

    const sendNewMessage = () => {
        sendMessage(message)
        setMessage('')
    }
    return (
        <div className={s.input_wrapper}>
            <input value={message} onChange={event => setMessage(event.target.value)}
                placeholder='new message...' />
            <div>
                <img alt='send_icon' className={s.send_icon} src={btn_send}
                    onClick={() => sendNewMessage(message)} /></div>

        </div>
    )
}
