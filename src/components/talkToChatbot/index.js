import { Link } from 'react-router-dom'

import ZeImg from '../../assets/img/ze.jpg'

import './style.css'

function TalkToChatbot() {
    return (
        <Link to='/ze' className='falar-com-o-ze'>
            <span className='texto'>Falar com o Zé</span>
            <img src={ZeImg} alt='Zé' />
        </Link>
    ) 
}

export default TalkToChatbot
