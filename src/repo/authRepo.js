import { endpoint } from './base'

const checkToken = async () => {
    const token = localStorage.getItem('token')

    if (!token)
        console.log('Token vazio')

    const { ok } = await fetch(`${endpoint}/token`, {
        headers: {
            'authorization': `Bearer ${token}`
        }
    })

    return ok
}

const getToken = async (email, password) => {
    const res = await fetch(`${endpoint}/auth/login`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })

    if (!res.ok)
        throw new Error()

    const answer = await res.json()
    return answer.access_token
}

const register = async (username, cpf, email, password) => {
    const res = await fetch(`${endpoint}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            username,
            email,
            password,
            identity: cpf
        })
    })

    if (!res.ok)
        throw new Error()

    const token = await getToken(email, password)
    return token
}

export {
    checkToken,
    getToken,
    register
}
