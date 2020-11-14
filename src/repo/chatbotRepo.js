const endpoint = 'https://pague-ze.herokuapp.com/chatbot'

const getChatbotAnswer = async (message) => {
    const res = await fetch(`${endpoint}/messages`, {
        method: 'POST',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('token')}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            message
        })
    })
    const answer = await res.json()
    return answer.message
}

export {
    getChatbotAnswer
}
