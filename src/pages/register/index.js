import { useState } from "react"
import { Link, useHistory } from "react-router-dom"

import { register } from "../../repo/authRepo"

import "../login/style.css"

function Register() {
    const history = useHistory()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleFormSubmit = async e => {
        e.preventDefault()

        try {
            history.push("/")
        } catch (error) {
            console.log(`error: ${error}`)
            alert("Houve um erro criando a sua conta \nTente novamente")
        }
    }

    return (
        <div className="pagina-autenticacao">
            <form onSubmit={handleFormSubmit}>
                <h1 className="titulo">Crie a sua conta</h1>

                <div className="input">
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

                <div className="input">
                    <label htmlFor="password">Password:</label>

                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Criar conta</button>

                <p>ou</p>

                <Link to='/login'>Entrar na sua conta</Link>
            </form>
        </div>
    )
}

export default Register
