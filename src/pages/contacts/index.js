import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import { getContacts } from '../../repo/contactRepo'

import ArrowImg from '../../assets/img/arrow.svg'

import './style.css'

function Contacts({ history }) {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        getContacts().then(res => {
            setContacts(res)
        }).catch(error => {
            alert("Houve um erro pegando os seus contatos \nTente novamente")
        })
    }, [])
    
    return (
        <div className='pagina-contatos'>
            <Header history={history} title='Contatos' />

            {contacts.map((contact, i) => (
                <Link to={`/contato/${contact.id}`} key={i} className={`contato ${i % 2 !== 0 ? "impar" : ""}`}>
                    <img className='foto' src={contact.photo} alt={`Foto de ${contact.name.first} ${contact.name.last}`}/>

                    <div className="informacoes">
                        <p className='nome'>{contact.name}</p>

                        <p className='descricao'>{contact.description}</p>
                    </div>

                    <img className='seta' src={ArrowImg} alt="Seta" />
                </Link>
            ))}
        </div>
    )
}

export default Contacts
