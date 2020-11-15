import { endpoint } from './base'

const getChatbotAnswer = async (message) => {
    const res = await fetch(`${endpoint}/chatbot/messages`, {
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
