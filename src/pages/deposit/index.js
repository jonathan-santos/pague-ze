import { Link } from 'react-router-dom'

import { getLotericaCode } from '../../repo/depositRepo'

import Header from '../../components/header'
import TalkToChatbot from '../../components/talkToChatbot'
import Modal from '../../components/modal'

import './style.css'

function Deposit({ history }) {
    const handleClickCasasLotericas = async () => {
        try {
            const res = await getLotericaCode(5)
            console.log(`res: ${res}`)
            history.push(`/confirmacao/deposito/${'1'}`)
        } catch (error) {
            alert('Não foi possível fazer o depósito na lotérica \nTente novamente')
        }
    }

    const handleClickBoleto = async () => {
        try {
            history.push(`/confirmacao/deposito/${'1'}`)
        } catch (error) {
            alert('Não foi possível fazer o depósito na lotérica \nTente novamente')
        }
    }
    
    return (
        <div className='pagina-depositar'>
            <Header history={history} />

            <div className="conteudo">
                <p className='titulo'>Adicionar dinheiro</p>

                <p className='subtitulo'>Escolha uma opção: </p>

                <button className='botao disabled'>Chave Pix</button>

                <button onClick={handleClickCasasLotericas} className='botao'>Casas lotéricas</button>

                <button onClick={handleClickBoleto} className='botao'>Boleto</button>

                <TalkToChatbot />

                <Modal />
            </div>
        </div>
    )
}

export default Deposit
