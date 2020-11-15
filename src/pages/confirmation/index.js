import { Link, Route, useParams } from 'react-router-dom'

import ConfirmationImg from '../../assets/img/confirmation.png'
import HouseImg from '../../assets/img/house.svg'

import './style.css'

function Confirmation({ history, match }) {
    const { id } = useParams()

    const handleClickVisualizeReceipt = () => {
        // alert(`Comprovante: \n${id}`)
    }

    const handleClickDoAnotherCharge = () => {
        history.push('/contatos')
    }

    return (
        <div className='pagina-confirmacao'>
            <p className='tudo-certo'>Tudo certo</p>

            <Route path='/confirmacao/deposito' render={() => (
                <p className='mensagem'>Oba! Dinheiro na conta!</p>
            )} />

            <Route path='/confirmacao/pagamento' render={() => (
                <p className='mensagem'>Pagamento feito com sucesso!</p>
            )} />

            <Route path='/confirmacao/cobranca' render={() => (
                <p className='mensagem'>Aguardando o pagamento...</p>
            )} />

            <img className='dinheiro' src={ConfirmationImg} alt='Imagem de dinheiro' />

            <Route exact path='/confirmacao/deposito/:id' render={() => (
                <button className='acao' onClick={handleClickVisualizeReceipt}>
                    Visualizar comprovante
                </button>
            )} />

            <Route exact path='/confirmacao/pagamento/:id' render={() => (
                <button className='acao' onClick={handleClickVisualizeReceipt}>
                    Visualizar comprovante
                </button>
            )} />

            <Route exact path='/confirmacao/cobranca' render={() => (
                <button className='acao' onClick={handleClickDoAnotherCharge}>
                    Fazer outra cobrança
                </button>
            )} />


            <Link to='/' className='voltar'>
                <img src={HouseImg} alt='Ícone de casa' /> Voltar ao início
            </Link>
        </div>
    )
}

export default Confirmation
