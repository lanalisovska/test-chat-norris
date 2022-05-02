import React, { useState } from 'react'
import s from './Input.module.css'
import { useForm } from 'react-hook-form'
import btn_send from './../icons/send-button.png'

export default function InputElement({sendMessage}) {

    const [message, setMessage] = useState('')
     
    const sendNewMessage = () => {
        sendMessage(message)
         setMessage('')
    }
    const { register, formState: { errors}, handleSubmit } = useForm({ mode: 'onBlur' })

    return (
        <div className={s.input_wrapper}>
            <form onSubmit={handleSubmit(sendNewMessage)}>
            <input value={message}  {...register('message', {
                        required: 'Input is required',
                        minLength: {
                        value: 1,
                        message: `Min lenght 1 letter`
                        }
                    })}
            
            onChange={ event => setMessage(event.target.value)}
             placeholder='new message...'/>
               <span style={{ color: 'red' }}>{errors?.username && <p>{errors?.username?.message}</p>}</span>
               
             <div> <img className={s.send_icon} src={btn_send} onClick={() => sendNewMessage(message)}/></div>
            </form>
        </div>
    )
}
