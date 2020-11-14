import { useState, useEffect } from 'react'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Contact({ history }) {
    useEffect(() => {

    }, [])

    return (
        <div className='pagina-contato'>
            <Header history={history} />

            <TalkToChatbot />
        </div>
    )
}

export default Contact
