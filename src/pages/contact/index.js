import { useState, useEffect } from 'react'
import { Route, Link, useParams, useRouteMatch } from 'react-router-dom'

import { getContact } from '../../repo/contactRepo'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Contact({ history }) {
    const { id } = useParams();
    const { url } = useRouteMatch();
    const [contact, setContact] = useState({})

    useEffect(() => {
        getContact(id).then(res => {
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

                <Route exact path='/contato/:id' render={() => (
                    <>
                        <Link to={`${url}/pagar`} className='botao primario'>PAGAR</Link>

                        <Link to={`${url}/cobrar`} className='botao secundario'>COBRAR</Link>
                    </>
                )} />

                <Route exact path='/contato/:id/pagar' render={() => (
                    <>
                        <Link to={`/confirmacao/comprovante/${'BATATA'}`} className='botao primario'>Chave Pix</Link>
                        <Link to={`/confirmacao/comprovante/${'BATATA'}`} className='botao primario'>Mercado Pago</Link>
                        <Link to={`/confirmacao/comprovante/${'BATATA'}`} className='botao primario'>QR Code</Link>
                    </>
                )} />

                <Route exact path='/contato/:id/cobrar' render={() => (
                    <>
                        <Link to={`/confirmacao/cobranca`} className='botao primario'>Chave Pix</Link>
                        <Link to={`/confirmacao/cobranca`} className='botao primario'>Mercado Pago</Link>
                        <Link to={`/confirmacao/cobranca`} className='botao primario'>Boleto</Link>
                    </>
                )} />
            </div>}
            
            <TalkToChatbot />
        </div>
    )
}

export default Contact
