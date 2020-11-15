import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import TalkToChatbot from '../../components/talkToChatbot'
import { getProfile } from '../../repo/profileRepo'

import HamburguerImg from '../../assets/img/hamburguer.svg'
import ExpandArrowImg from '../../assets/img/expandArrow.svg'

import './style.css'

function Home() {
    const [username, setUsername] = useState('')
    const [financialState] = useState({
        money: 7729,
        yearResume: [
            { month: "Fevereiro", value: "278" },
            { month: "Março", value: "-50" }
        ]
    })
    const [selectedMonth, setSelectedMonth] = useState(0)

    useEffect(() => {
        getProfile().then(res => {
            setUsername(res.username)
        }).catch(error => {
            alert('Houve um problema pegando os seus dados \nTente novamente')
        })
    }, [])

    const onMonthClicked = (index) => {
        setSelectedMonth(index)
    }

    return (
        <div className='pagina-home'>
            <div className="topo">
                {/* <button className="botao-menu">
                    <img src={HamburguerImg} alt='Ícone de menu' />
                </button> */}

                <p className='saudacao'>Bom dia, {username}!</p>

                <p className='subtitulo' style={{ textAlign: 'end'}}>Meu dinheiro</p>

                <p className='dinheiro'>R$ {financialState.money}</p>

                <p className='subtitulo'>Quanto economizei?</p>

                <div className="meses">
                    {financialState.yearResume.map(({ month }, i) => (
                        <button onClick={() => onMonthClicked(i)} key={i} className={i === selectedMonth ? 'selecionado' : ''}>{month}</button>
                    ))}
                </div>
            </div>

            <div className='economia' style={{ color: financialState.yearResume[selectedMonth].value > 0 ? 'var(--cor-positivo)' : 'var(--cor-negativo)' }}>
                Economia de {financialState.yearResume[selectedMonth].value > 0 ? '+' : ''}{financialState.yearResume[selectedMonth].value}
            </div>

            <div className="fundo">
                <div className='boletos'>
                    <h2 className="titulo">Meus boletos</h2>

                    {/* <button className='botao-expandir'>
                        <img src={ExpandArrowImg} alt='Ícone de seta' />
                    </button> */}
                </div>

                <div className="pagamento">
                    <Link to='/pagar' className='botao primario pagar'>
                        Pagar
                    </Link>

                    <Link to='/depositar' className='botao secundario cobrar'>
                        Depositar
                    </Link>
                </div>

                <Link to='/contatos' className='botao primario'>
                    Contatos
                </Link>

                <Link to='/meu-dinheiro' className='botao primario'>
                    Meu dinheiro
                </Link>

                <TalkToChatbot />
            </div>
        </div>
    )
}

export default Home
