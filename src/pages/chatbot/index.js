import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { getChatbotAnswer } from '../../repo/chatbotRepo'

import HouseImg from '../../assets/img/house.svg'
import ZeImg from '../../assets/img/ze.jpg'
import MicrophoneImg from '../../assets/img/microphone.svg'
import ArrowImg from '../../assets/img/arrow.svg'

import './style.css'

function Chatbot() {
    const [messages, setMessages] = useState([])
    const [inputText, setInputText] = useState('')

    useEffect(() => {
        setTimeout(() => {
            setMessages([
                { sender: 'ze', text: 'Opa! Tudo bem?', time: '10:00' },
                { sender: 'ze', text: 'Que que eu posso te ajudar?', time: '10:00' },
            ])
        }, 500)
    }, [])

    const handleInputOnChange = (e) => {
        setInputText(e.target.value)
    }

    const handleSendText = async (e) => {
        e.preventDefault()

        try {
            const answer = await getChatbotAnswer(inputText)
            setMessages([
                ...messages,
                { sender: 'user', text: inputText, time: '10:00' },
                { sender: 'ze', text: answer, time: '10:00' }
            ])

            setInputText('')
        } catch (error) {
            alert('Houve um problema falando com o Seu Zé \nTenta de novo')
        }
    }
    
    return (
        <div className='pagina-ze'>
            <div className="topo">
                <Link to='/'>
                    <img src={HouseImg} alt='Símbolo de casa' />
                </Link>

                <h1 className='titulo'>Seu Zé</h1>

                <img className='ze' src={ZeImg} alt='Zé' />
            </div>

            <div className="mensagens">
                {messages.map((message, i) => (
                    <div className={`mensagem ${message.sender === 'ze' ? 'ze' : 'usuario'}`} key={i}>
                        <span className="texto">{message.text}</span>
                        <span className="hora">{message.time}</span>
                    </div>
                ))}
            </div>

            <form className="fundo" onSubmit={handleSendText}>
                <input
                    type="text"
                    value={inputText}
                    onChange={handleInputOnChange}
                    onSubmit={handleSendText}
                />

                <button type='submit'>
                    {/* <img src={MicrophoneImg} alt='microfone' /> */}
                    <img className='seta' src={ArrowImg} alt='seta' />
                </button>
            </form>
        </div>
    )
}

export default Chatbot
