const endpoint = 'https://randomuser.me/api'

const getContacts = async () => {
    const res = await fetch(`${endpoint}?results=20`)

    if (!res.ok)
        throw new Error(res.statusText)

    const { results } = await res.json()
    return results
}

export {
    getContacts
}
