import { Link } from 'react-router-dom'

import './style.css'

import LogoImg from '../../assets/img/logo.png'

function Start() {
    return (
        <div className='pagina-start'>
            <img src={LogoImg} alt='Logo do Pague Zé' />

            <Link to='/entrar' className="botao primario">
                Entrar
            </Link>

            <Link to='/registrar' className="botao secundario">
                Criar sua conta
            </Link>
        </div>
    )
}

export default Start
