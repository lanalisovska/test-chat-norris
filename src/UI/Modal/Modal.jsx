import React from 'react'
import s from './Modal.module.css'

export default function Modal(props) {
    return (
        <div className={s.module}>
            New massage from {props.children}!
        </div>
    )
}
