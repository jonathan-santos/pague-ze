import { useState } from "react"

import './style.css'

function Home() {
    const [user, setUser] = useState({ name: "Jonathan", money: 7729 })
    const [yearEconomy, setYearEconomy] = useState([
        { month: "Fevereiro", value: "278" },
        { month: "Março", value: "-50" }
    ])
    const [selectedMonth, setSelectedMonth] = useState(0)

    const onMonthClicked = (index) => {
        setSelectedMonth(index)
    }

    return (
        <>
            <div className="topo">
                <button className="menu-button">
                    H
                </button>

                <p className='saudacao'>Bom dia, {user.name}!</p>

                <p className='subtitulo'>Meu dinheiro</p>

                <p className='dinheiro'>R$ {user.money}</p>

                <p className='subtitulo'>Quanto economizei?</p>

                <div className="meses">
                    {yearEconomy.map(({ month }, i) => (
                        <span onClick={() => onMonthClicked(i)} key={i} className={i == selectedMonth ? 'selecionado' : ''}>{month}</span>
                    ))}
                </div>
            </div>

            <div className='economia' style={{ color: yearEconomy[selectedMonth].value > 0 ? 'var(--cor-positivo)' : 'var(--cor-negativo)' }}>
                Economia de {yearEconomy[selectedMonth].value > 0 ? '+' : ''}{yearEconomy[selectedMonth].value}
            </div>

            <div className="fundo">
                <div className='boletos'>
                    <h2 className="titulo">Meus boletos</h2>

                    <button className='botao-expandir'>V</button>
                </div>

                <div className='pagar'>
                    Pagar
                </div>
            </div>
        </>
    )
}

export default Home
