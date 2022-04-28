import React, { useState } from 'react'
import s from './Input.module.css'
import { useForm } from 'react-hook-form'

export default function InputElement({sendMessage}) {

    const [message, setMessage] = useState('')
     
    const sendNewMessage = () => {
        sendMessage(message)
         setMessage('')
    }
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: 'onBlur' })

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
               
            <button onClick={() => sendNewMessage(message)}  >Send message</button>
            </form>
        </div>
    )
}
