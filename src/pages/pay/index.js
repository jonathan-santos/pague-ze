import { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Pay({ history }) {
    const [contact, setContact] = useState('')

    const handleFormSubmit = e => {
        e.preventDefault()

        console.log("SUBMIT")
    }

    return (
        <div className='pagina-pagar'>
            <Header history={history} />

            <form className="conteudo escolher-contato" onSubmit={handleFormSubmit}>
                <p className='titulo'>Quem você quer pagar?</p>

                <input
                    type="text"
                    value={contact}
                    onChange={e => setContact(e.target.value)}
                    placeholder='Pesquisar contato...'
                    required
                />

                <button type='submit' to='/' className='botao'>Escolher contatos</button>
            </form>

            <div className="conteudo outras-opcoes">
                <p className="titulo">Outras opções</p>

                <button className='botao disabled'>Chave pix</button>
                <Link to={`/confirmacao/pagamento/${'CAFÉ'}`} className='botao'>QR Code</Link>

                <TalkToChatbot />
            </div>
        </div>
    )
}

export default Pay
