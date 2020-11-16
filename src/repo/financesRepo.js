const financialState = [
    {
        name: 'Recebi',
        value: 300,
        details: [
            { name: 'Alenildo Lopes', value: 78 },
            { name: 'Sebastião Junior', value: 80 },
            { name: 'Antonieta Cailá', value: 50 },
            { name: 'Irinaldo Freire', value: 92 },
        ]
    },{
        name: 'Paguei',
        value: -243,
        details: [
            { name: 'Supermercado do bairro', value: 150 },
            { name: 'Salão do Zé', value: 20 },
            { name: 'Buteco da Juliane', value: 76 },
            { name: 'Padoca estrela', value: 15 },
        ]
    },
]

const getFinancialState = async () => {
    return new Promise(resolve => {
        resolve(financialState)
    }, reject => {}) 
}

export {
    getFinancialState
}