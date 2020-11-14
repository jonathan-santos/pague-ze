import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import './style.css'

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmit = e => {
        e.preventDefault()

        localStorage.setItem('oAuthToken', 'POTATO')
        history.push('/')
    }

    return (
        <div className='pagina-login'>
            <form onSubmit={handleFormSubmit}>
                <h1 className='titulo'>Login</h1>

                <div className="input">
                    <label htmlFor="email">Email:</label>

                    <input
                        id='email'
                        name='email'
                        type="text"
                        placeholder="seuemail@email.com.br"
                        required
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className="input">
                    <label htmlFor="password">Password:</label>

                    <input
                        id='password'
                        name='password'
                        type="password"
                        required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit">Fazer login</button>
            </form>
        </div>
    )
}

export default Login
