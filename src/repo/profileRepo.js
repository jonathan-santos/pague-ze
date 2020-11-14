const endpoint = 'https://pague-ze.herokuapp.com/users'

const getProfile = async () => {
    const res = await fetch(`${endpoint}/profile`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
    
    if (!res.ok)
        throw new Error
    
    const profile = await res.json()
    return profile
}

export {
    getProfile
}
