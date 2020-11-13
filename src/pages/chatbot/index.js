import { Link } from 'react-router-dom'

import './style.css'

import HouseImg from '../../assets/img/house.svg'
import ZeImg from '../../assets/img/ze.jpg'
import MicrophoneImg from '../../assets/img/microphone.svg'

function Chatbot() {
    return (
        <div className='pagina-ze'>
            <div className="topo">
                <Link to='/'>
                    <img src={HouseImg} alt='Símbolo de casa' />
                </Link>

                <h1 className='titulo'>Seu Zé</h1>

                <img className='ze' src={ZeImg} alt='Zé' />
            </div>

            <div className="mensagens">
                <div className="mensagem ze">
                    <span className="texto">Texto</span>
                    <span className="hora">10:00</span>
                </div>
                <div className="mensagem usuario">
                    <span className="texto">Texto</span>
                    <span className="hora">10:00</span>
                </div>
                <div className="mensagem usuario">
                    <span className="texto">Texto</span>
                    <span className="hora">10:00</span>
                </div>
                <div className="mensagem ze">
                    <span className="texto">Texto</span>
                    <span className="hora">10:00</span>
                </div>
            </div>

            <div className="fundo">
                <input type="text" />

                <button>
                    <img src={MicrophoneImg} alt='microfone' />
                </button>
            </div>
        </div>
    )
}

export default Chatbot
