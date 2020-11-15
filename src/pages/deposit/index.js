import { Link } from 'react-router-dom'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Deposit({ history }) {
    return (
        <div className='pagina-depositar'>
            <Header history={history} />

            <div className="conteudo">
                <p className='titulo'>Adicionar dinheiro</p>

                <p className='subtitulo'>Escolha uma opção: </p>

                <Link to={`/confirmacao/deposito/${'MANDIOCA'}`} className='botao'>Chave Pix</Link>

                <Link to={`/confirmacao/deposito/${'MANDIOCA'}`} className='botao'>Casas lotéricas</Link>

                <Link to={`/confirmacao/deposito/${'MANDIOCA'}`} className='botao'>Boleto</Link>

                <TalkToChatbot />
            </div>
        </div>
    )
}

export default Deposit
