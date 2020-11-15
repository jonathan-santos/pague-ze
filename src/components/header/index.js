import BackArrowImg from '../../assets/img/backArrow.svg'

import TalkToChatbot from '../talkToChatbot'

import './style.css'

function Header({ history, title, alternativeStyle, noChatbot }) {
    return (
        <header className={`header ${alternativeStyle ? 'alt' : ''}`}>
            <button className='voltar' onClick={() => history.goBack()}>
                <img src={BackArrowImg} alt='Ícone de seta' /> Voltar
            </button>

            {title && 
                <h1 className='titulo'>{title}</h1>}

            {(alternativeStyle && !noChatbot) &&
                <TalkToChatbot minimal />}
        </header>
    )
}

export default Header
