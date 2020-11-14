import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import { getContacts } from '../../repo/contactRepo'

import ContactArrowImg from '../../assets/img/contactArrow.svg'

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
                <Link to={`/contato/${contact.id.value}`} key={i} className={`contato ${i % 2 !== 0 ? "impar" : ""}`}>
                    <img className='foto' src={contact.picture.thumbnail} alt={`Foto de ${contact.name.first} ${contact.name.last}`}/>

                    <div className="informacoes">
                        <p className='nome'>{`${contact.name.first} ${contact.name.last}`}</p>

                        <p className='descricao'>Alguma coisa, alguma coisa</p>
                    </div>

                    <img className='seta' src={ContactArrowImg} alt="Seta" />
                </Link>
            ))}
        </div>
    )
}

export default Contacts
