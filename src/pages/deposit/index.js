import { useState } from 'react'

import { getLotericaCode, getBoletoCode } from '../../repo/depositRepo'

import Header from '../../components/header'
import Modal from '../../components/modal'
import TalkToChatbot from '../../components/talkToChatbot'

import './style.css'

function Deposit({ history }) {
    const [depositValue, setDepositeValue] = useState(0)
    const [actionDesired, setActionDesired] = useState('')
    const [resultCode, setResultCode] = useState('')
    const [cpf, setCpf] = useState('')
    const [modalDepositValueOpen, setModalDepositValueOpen] = useState(false)
    const [modalInstructionsOpen, setModalInstructionsOpen] = useState(false)

    const handleClickDepositOption = (optionName) => {
        setModalDepositValueOpen(true)
        setActionDesired(optionName)
    }

    const handleModalDepositValueFormSubmit = e => {
        e.preventDefault()

        setModalDepositValueOpen(false)

        if (actionDesired === 'casas-lotericas')
            doCasasLotericasAction()
        else if (actionDesired === 'boleto')
            doBoletoAction()
    }

    const doCasasLotericasAction = async () => {
        try {
            const res = await getLotericaCode(depositValue)
            setResultCode(res.code)
            setCpf(res.identity)
            setModalInstructionsOpen(true)
        } catch (error) {
            alert('Não foi possível fazer o depósito na lotérica \nTente novamente')
        }
    }

    const doBoletoAction = async () => {
        try {
            const res = await getBoletoCode(depositValue)
            setResultCode(res.code)
            setCpf(res.identity)
            setModalInstructionsOpen(true)
        } catch (error) {
            alert('Não foi possível fazer o depósito com boleto \nTente novamente')
        }
    }

    const handleCloseModalInstructions = () => {
        history.push('/confirmacao/deposito')
    }
    
    return (
        <div className='pagina-depositar'>
            <Header history={history} />

            <div className="conteudo">
                <p className='titulo'>Adicionar dinheiro</p>

                <p className='subtitulo'>Escolha uma opção: </p>

                <button className='botao disabled'>Chave Pix</button>

                <button onClick={() => handleClickDepositOption('casas-lotericas')} className='botao'>Casas lotéricas</button>

                <button onClick={() => handleClickDepositOption('boleto')} className='botao'>Boleto</button>

                <TalkToChatbot />

                <Modal title="Quanto quer depositar?" isOpen={modalDepositValueOpen} handleCloseModal={() => setModalDepositValueOpen(false)}>
                    <form onSubmit={handleModalDepositValueFormSubmit}>
                        <div className="input-field">
                            <label htmlFor='depositvalue'>Valor (R$):</label>

                            <input
                                id='depositvalue'
                                name='depositvalue'
                                type='number'
                                min="0.01"
                                step="0.01"
                                max="9999999"
                                value={depositValue}
                                onChange={e => setDepositeValue(e.target.value)}
                                required
                            />
                        </div>

                        <button type='submit' className='botao'>Continuar</button>
                    </form>
                </Modal>

                <Modal title="O que você deve fazer agora?" isOpen={modalInstructionsOpen} handleCloseModal={handleCloseModalInstructions}>
                    {actionDesired === 'casas-lotericas' && <>
                        <p style={{ textAlign: 'center' }}>Apresente esse código na lotérica: {resultCode} <br/>Junto do seu CPF: {cpf}</p>
                    </>}

                    {actionDesired === 'boleto' && <>
                        <p style={{ textAlign: 'center' }}>Agora é só pagar o boleto: {resultCode}</p>
                    </>}
                </Modal>
            </div>
        </div>
    )
}

export default Deposit
