import { useState, useEffect } from 'react'

import { getContacts } from '../../repo/contactRepo'

import BackArrowImg from '../../assets/img/backArrow.svg'
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
            <header>
                <button className='voltar' onClick={() => history.goBack()}>
                    <img src={BackArrowImg} alt='Ícone de seta' /> Voltar
                </button>

                <h1 className='titulo'>Meus contatos</h1>
            </header>

            {contacts.map((contact, i) => (
                <div key={i} className={`contato ${i % 2 == 0 ? "par" : ""}`}>
                    <img className='foto' src={contact.picture.thumbnail} alt={`Foto de ${contact.name.first} ${contact.name.last}`}/>

                    <div className="informacoes">
                        <p className='nome'>{`${contact.name.first} ${contact.name.last}`}</p>

                        <p className='descricao'>Alguma coisa, alguma coisa</p>
                    </div>

                    <img className='seta' src={ContactArrowImg} alt="Seta" />
                </div>
            ))}
        </div>
    )
}

export default Contacts
