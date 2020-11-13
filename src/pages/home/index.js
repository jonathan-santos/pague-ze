import { useState } from "react"
import { Link } from 'react-router-dom'

import HamburguerImg from '../../assets/img/hamburguer.svg'
import ArrowImg from '../../assets/img/arrow.svg'
import ZeImg from '../../assets/img/ze.jpg'

import './style.css'

function Home() {
    const [user] = useState({ name: "Jonathan", money: 7729 })
    const [yearEconomy] = useState([
        { month: "Fevereiro", value: "278" },
        { month: "Março", value: "-50" }
    ])
    const [selectedMonth, setSelectedMonth] = useState(0)

    const onMonthClicked = (index) => {
        setSelectedMonth(index)
    }

    return (
        <div className='pagina-home'>
            <div className="topo">
                <button className="botao-menu">
                    <img src={HamburguerImg} alt='Ícone de menu' />
                </button>

                <p className='saudacao'>Bom dia, {user.name}!</p>

                <p className='subtitulo'>Meu dinheiro</p>

                <p className='dinheiro'>R$ {user.money}</p>

                <p className='subtitulo'>Quanto economizei?</p>

                <div className="meses">
                    {yearEconomy.map(({ month }, i) => (
                        <button onClick={() => onMonthClicked(i)} key={i} className={i === selectedMonth ? 'selecionado' : ''}>{month}</button>
                    ))}
                </div>
            </div>

            <div className='economia' style={{ color: yearEconomy[selectedMonth].value > 0 ? 'var(--cor-positivo)' : 'var(--cor-negativo)' }}>
                Economia de {yearEconomy[selectedMonth].value > 0 ? '+' : ''}{yearEconomy[selectedMonth].value}
            </div>

            <div className="fundo">
                <div className='boletos'>
                    <h2 className="titulo">Meus boletos</h2>

                    <button className='botao-expandir'>
                        <img src={ArrowImg} alt='Ícone de seta' />
                    </button>
                </div>

                <div className='pagar'>
                    Pagar
                </div>

                <Link to='/ze' className='falar-com-o-ze'>
                    <span className='texto'>Falar com o Zé</span>
                    <img src={ZeImg} alt='Zé' />
                </Link>
            </div>
        </div>
    )
}

export default Home
