const endpoint = 'https://pague-ze.herokuapp.com/auth'

const getToken = async (email, password) => {
    const res = await fetch(`${endpoint}/login`, {
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

export {
    getToken
}

