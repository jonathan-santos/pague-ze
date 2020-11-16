import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getFinancialState } from '../../repo/financesRepo'

import Header from '../../components/header'

import ArrowImg from '../../assets/img/arrow.svg'

import './style.css'

function Finances({ history }) {
    const [financialState, setFinancialState] = useState([])

    useEffect(() => {
        getFinancialState().then(res => {
            setFinancialState(res)
        }, error => {
            alert('Não foi possível pegar seus dados financeiros \nTente novamente')
        })
    }, [])
    
    return (
        <div className='pagina-meu-dinheiro'>
            <Header history={history} title="Meu dinheiro" goToHome alternativeStyle />
            
            <div className="secoes">
                <div className="secao">
                    <div className="expandir">
                        <p className='titulo principal'>Meu dinheiro</p>
                        <p className='valor principal'>R$ {localStorage.getItem('tenho')}</p>
                    </div>
                </div>

                {financialState.map((financialData, i) => (
                    <div className="secao" key={i}>
                        <input type="checkbox" id={financialData.name} />

                        <label htmlFor={financialData.name} className="expandir">
                            <p className='titulo'>{financialData.name}</p>
                            <p className='valor'>R$ {financialData.value}</p>

                            {financialData.details.length > 0 &&
                                <img className='seta' src={ArrowImg} alt='seta' />}
                        </label>

                        <div className="detalhes">
                            {financialData.details.map((detail, j) => (
                                <div className="detalhe" key={j}>
                                    <p className="nome">{detail.name}</p>
                                    <p className="valor">R$ {detail.value}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}

                <Link className='botao-principal' to='/novo-gasto'>
                    Cadastrar novo gasto
                </Link>
            </div>
        </div>
    )
}

export default Finances
