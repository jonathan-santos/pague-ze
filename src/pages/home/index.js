import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'

import TalkToChatbot from '../../components/talkToChatbot'
import { getProfile } from '../../repo/profileRepo'

import './style.css'

function Home({ history }) {
    const [username, setUsername] = useState('')
    const [financialState, setFinancialState] = useState({
        money: '0.00',
        yearResume: [
            { month: "Novembro", value: "0.00" },
            { month: "Outubro", value: "0.00" },
            { month: "Setembro", value: "0.00" }
        ]
    })
    const [selectedMonth, setSelectedMonth] = useState(0)

    useEffect(() => {
        getProfile().then(res => {
            setUsername(res.username)
            localStorage.setItem('tenho', res.account.balance)
            setFinancialState({
                ...financialState,
                money: res.account.balance
            })
        }).catch(error => {
            alert('Houve um problema pegando os seus dados \nTente novamente')
        })
    }, [])

    const handleClickSair = () => {
        localStorage.setItem('token', '')
        history.push('/inicio')
    }

    const onMonthClicked = (index) => {
        setSelectedMonth(index)
    }

    return (
        <div className='pagina-home'>
            <div className="topo">
                <div className="conta">
                    <p className='saudacao'>Bom dia, {username}!</p>

                    <button className="botao-sair" onClick={handleClickSair}>
                        Sair
                    </button>
                </div>

                <p className='subtitulo' style={{ textAlign: 'end'}}>Meu dinheiro</p>

                <p className='dinheiro'>R$ {financialState.money}</p>

                <p className='subtitulo'>Quanto economizei?</p>

                <div className="meses">
                    {financialState.yearResume.map(({ month }, i) => (
                        <button onClick={() => onMonthClicked(i)} key={i} className={i === selectedMonth ? 'selecionado' : ''}>{month}</button>
                    ))}
                </div>
            </div>

            <div className='economia' style={{ color: financialState.yearResume[selectedMonth].value >= 0 ? 'var(--cor-positivo)' : 'var(--cor-negativo)' }}>
                Economia de R$ {financialState.yearResume[selectedMonth].value > 0 ? '+' : ''}{financialState.yearResume[selectedMonth].value}
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
