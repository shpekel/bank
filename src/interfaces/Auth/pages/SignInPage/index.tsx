import React from 'react'
import {useState} from "react";
import './styles.css'

const SignInPage: React.FC = () => {
    const [fullname, setFullname] = useState('')
    const [numberPhone, setNumberPhone] = useState('')

    return (
        <div className='sign-in-wrapper'>
            <input
                className='input-field'
                style={{marginBottom: "10px"}}
                value={fullname}
                onChange={(event) => setFullname(event.target.value)}
                placeholder='Введите ФИО'
            />
            <input
                className='input-field'
                value={numberPhone}
                onChange={(event) => setNumberPhone(event.target.value)}
                placeholder='Введите номер телефона'
            />
        </div>
    )
}

export default SignInPage