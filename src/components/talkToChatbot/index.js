import { Link } from 'react-router-dom'

import ZeImg from '../../assets/img/ze.jpg'

import './style.css'

function TalkToChatbot({ minimal }) {
    return (
        <Link to='/ze' className={`falar-com-o-ze ${minimal ? 'min' : ''}`}>
            <span className='texto'>Falar com o Zé</span>
            <img src={ZeImg} alt='Zé' />
        </Link>
    ) 
}

export default TalkToChatbot
