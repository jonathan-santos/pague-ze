const endpoint = 'https://pague-ze.herokuapp.com'

const authHeader = {
    'authorization': `Bearer ${localStorage.getItem('token')}`
}

export {
    endpoint,
    authHeader
}
