import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { register } from "../../repo/authRepo"

import LogoImg from '../../assets/img/logo.png'

import "../login/style.css"

function Register() {
    const history = useHistory()
    const [username, setUsername] = useState("")
    const [cpf, setCpf] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async e => {
        e.preventDefault()

        try {
            const token = await register(username, cpf, email, password)
            localStorage.setItem("token", token)
            history.push("/")
        } catch (error) {
            console.log(`error: ${error}`)
            alert("Houve um erro criando a sua conta \nTente novamente")
        }
    }

    return (
        <div className="pagina-autenticacao">
            <form onSubmit={handleFormSubmit}>
                <img className='small-logo' src={LogoImg} alt='Logo do Pague Zé' />

                <h1 className="titulo">Crie a sua conta</h1>

                <div className="input-field">
                    <label htmlFor="username">Seu nome:</label>

                    <input
                        id="username"
                        name="username"
                        type="username"
                        placeholder="Seu Zé"
                        required
                        autocomplete='off'
                        value={username} 
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="cpf">CPF:</label>

                    <input
                        id="cpf"
                        name="cpf"
                        type="cpf"
                        required
                        autocomplete='off'
                        minLength='11'
                        maxLength='11'
                        value={cpf} 
                        onChange={e => setCpf(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="email">Email:</label>

                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seuemail@email.com.br"
                        required
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-field">
                    <label htmlFor="password">Senha:</label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        autocomplete="new-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button className='botao' type="submit">Criar conta</button>

                <p>ou</p>

                <Link to='/entrar'>Entrar na sua conta</Link>
            </form>
        </div>
    )
}

export default Register
