const contacts = [
    { id: 0, name: 'Alenildo Lopes', description: 'Roupas e Calçados', photo:'https://randomuser.me/api/portraits/men/49.jpg' },
    { id: 1, name: 'Antonieta Cailá', description: 'Doces e Salgados', photo:'https://randomuser.me/api/portraits/women/23.jpg' },
    { id: 2, name: 'Sebastião Junior', description: 'Hope it will work in the week...', photo:'https://randomuser.me/api/portraits/men/15.jpg' },
    { id: 3, name: 'Julieta Sampaio', description: 'Thank you! It really shine with...', photo:'https://randomuser.me/api/portraits/women/51.jpg' },
    { id: 4, name: 'Roberval', description: 'Yes I know', photo:'https://randomuser.me/api/portraits/men/5.jpg' },
    { id: 5, name: 'Irinaldo Freire', description: 'It will be online in 2 days', photo:'' },
    { id: 6, name: 'Johnny Cooper', description: 'Of course', photo:'https://randomuser.me/api/portraits/men/32.jpg' },
]

const getContacts = () => {
    return new Promise(resolve => {
        resolve(contacts)
    }, reject => {})
}

const getContact = id => {
    return new Promise(resolve => {
        const contact = contacts[id]
        resolve(contact)
    }, reject => {})
}

export {
    getContacts,
    getContact
}
