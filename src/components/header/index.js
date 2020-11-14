import BackArrowImg from '../../assets/img/backArrow.svg'

import './style.css'

function Header({ history, title }) {
    return (
        <header className='header'>
            <button className='voltar' onClick={() => history.goBack()}>
                <img src={BackArrowImg} alt='Ícone de seta' /> Voltar
            </button>

            {title && 
                <h1 className='titulo'>{title}</h1>}
            
        </header>
    )
}

export default Header
