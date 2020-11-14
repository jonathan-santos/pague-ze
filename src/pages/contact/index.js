import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getContact } from '../../repo/contactRepo'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Contact({ history, match }) {
    const [contact, setContact] = useState({})

    useEffect(() => {
        getContact(match.params.id).then(res => {
            setContact(res)
        }).catch(error => {
            alert('Erro pegando as informações do contato \nTente novamente')
        })
    }, [])

    return (
        <div className='pagina-contato'>
            <Header history={history} />

            {contact && 
            <div className='conteudo'>
                <img src={contact.photo} alt={`foto de ${contact.name}`} className="foto"/>
            
                <p className='nome'>{contact.name}</p>

                <p className="descricao">{contact.description}</p>

                <Link to='/pagar' className='botao primario'>PAGAR</Link>

                <Link to='/cobrar' className='botao secundario'>COBRAR</Link>
            </div>}
            
            <TalkToChatbot />
        </div>
    )
}

export default Contact
