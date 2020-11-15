import { endpoint } from './base'

const checkToken = async () => {
    const token = localStorage.getItem('token')

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
            identity: cpf,
            photo: 'https://d1nhio0ox7pgb.cloudfront.net/_img/o_collection_png/green_dark_grey/512x512/plain/user.png'
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
