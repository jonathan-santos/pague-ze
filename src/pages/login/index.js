import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { getToken } from "../../repo/authRepo"

import LogoImg from '../../assets/img/logo.png'

import "./style.css"

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async e => {
        e.preventDefault()

        try {
            const token = await getToken(email, password)
            localStorage.setItem("token", token)
            history.push("/")
        } catch (error) {
            console.log(`error: ${error}`)
            alert("Houve um erro entrando na sua conta \nTente novamente")
        }
    }

    return (
        <div className="pagina-autenticacao">
            <form onSubmit={handleFormSubmit}>
                <img className='small-logo' src={LogoImg} alt='Logo do Pague Zé' />
                
                <h1 className="titulo">Entrar na sua conta</h1>

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
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button className='botao' type="submit">Entrar</button>
                
                <p>ou</p>

                <Link to='/registrar'>Registre uma conta</Link>
            </form>
        </div>
    )
}

export default Login
