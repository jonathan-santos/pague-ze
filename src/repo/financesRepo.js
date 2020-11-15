const financialState = [
    {
        name: 'Meu dinheiro',
        value: 7729,
        details: [
            { name: 'Eduardo Feijó', value: 120 },
            { name: 'Eduardo Feijó', value: 432 },
            { name: 'Eduardo Feijó', value: 76 },
            { name: 'Eduardo Feijó', value: 900 },
        ]
    },{
        name: 'Recebimentos',
        value: 1354,
        details: [
            { name: 'Eduardo Feijó', value: 120 },
            { name: 'Eduardo Feijó', value: 432 },
            { name: 'Eduardo Feijó', value: 76 },
            { name: 'Eduardo Feijó', value: 900 },
        ]
    },{
        name: 'Vendas',
        value: 3354,
        details: [
            { name: 'Eduardo Feijó', value: 120 },
            { name: 'Eduardo Feijó', value: 432 },
            { name: 'Eduardo Feijó', value: 76 },
            { name: 'Eduardo Feijó', value: 900 },
        ]
    },{
        name: 'Transferências',
        value: -1648,
        details: [
            { name: 'Eduardo Feijó', value: 120 },
            { name: 'Eduardo Feijó', value: 432 },
            { name: 'Eduardo Feijó', value: 76 },
            { name: 'Eduardo Feijó', value: 900 },
        ]
    },{
        name: 'Pagamentos',
        value: -1373,
        details: [
            { name: 'Eduardo Feijó', value: 120 },
            { name: 'Eduardo Feijó', value: 432 },
            { name: 'Eduardo Feijó', value: 76 },
            { name: 'Eduardo Feijó', value: 900 },
        ]
    },
]

const getFinancialState = () => {
    return new Promise(resolve => {
        resolve(financialState)
    }, reject => {}) 
}

export {
    getFinancialState
}