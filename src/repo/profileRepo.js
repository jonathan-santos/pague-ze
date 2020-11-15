import { endpoint } from './base'

const getProfile = async () => {
    const res = await fetch(`${endpoint}/users/profile`, {
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
        }
    })
    
    if (!res.ok)
        throw new Error(res.status)
    
    const profile = await res.json()
    return profile
}

export {
    getProfile
}
