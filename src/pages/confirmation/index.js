import { Link } from 'react-router-dom'

import ConfirmationImg from '../../assets/img/confirmation.png'
import HouseImg from '../../assets/img/house.svg'

import './style.css'

function Confirmation({ history, match }) {
    let action = { }

    if (match.params.comprovante) {
        action = {
            name: 'Visualizar comprovante',
            clickHandler: () => {
                alert('Visualizando comprovante')
            }
        }
    } else if (match.params.cobranca) {
        action = {
            name: 'Fazer outra cobrança',
            clickHandler: () => {
                history.push('/cobrar')
            }
        }
    }
    
    return (
        <div className='pagina-confirmacao'>
            <p className='tudo-certo'>Tudo certo</p>

            <p className='mensagem'>{match.params.message}</p>

            <img className='dinheiro' src={ConfirmationImg} alt='Imagem de dinheiro' />

            <button className='acao' onClick={action.clickHandler}>
                {action.name}
            </button>

            <Link to='/' className='voltar'>
                <img src={HouseImg} alt='Ícone de casa' /> Voltar ao início
            </Link>
        </div>
    )
}

export default Confirmation
