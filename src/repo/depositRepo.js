const endpoint = "https://pague-ze.herokuapp.com/payments"

const getLotericaCode = async (value) => {
    const res = await fetch(`${endpoint}/loterica`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            amount: value
        })
    })

    if (!res.ok)
        throw new Error(res.statusText)

    const code = await res.json()
    return code
}

const getBoletoCode = async (value) => {
    const res = await fetch(`${endpoint}/boleto`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            amount: value
        })
    })

    if (!res.ok)
        throw new Error(res.statusText)

    const code = await res.json()
    return code
}

export {
    getLotericaCode,
    getBoletoCode
}
