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
        <div className='pagina-seu-dinheiro'>
            <Header history={history} title="Meu dinheiro" goToHome alternativeStyle />
            
            <div className="secoes">
                {financialState.map((financialData, i) => (
                    <div className="secao" key={i}>
                        <input type="checkbox" id={financialData.name} />

                        <label htmlFor={financialData.name} className="expandir">
                            <p className="titulo">{financialData.name}</p>
                            <p className={`valor ${i === 0 ? 'principal' : ''}`}>R$ {financialData.value}</p>
                            <img className='seta' src={ArrowImg} alt='seta' />
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
