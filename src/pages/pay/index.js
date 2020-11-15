import { Link } from 'react-router-dom'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Pay({ history }) {
    return (
        <div className='pagina-pagar'>
            <Header history={history} />

            <div className="conteudo escolher-contato">
                <p className='titulo'>Quem você quer pagar?</p>

                <Link to='/contatos' className='botao'>Escolher contato</Link>
            </div>

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
