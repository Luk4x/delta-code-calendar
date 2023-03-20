export const user = {
    fullName: 'luiz antônio neto',
    imageUrl: 'https://github.com/luiz-from-delta.png',
    organization: 'delta code ltda',
    movements: {
        '2023-01-10T03:00:00.000Z': [
            {
                title: 'Pró-Labore: Luiz Antônio Teixeira...',
                type: 'salário',
                value: 10000
            },
            {
                title: 'Prestação de Serviços: Delta Code...',
                type: 'receita',
                value: 12050
            },
            {
                title: 'FGTS: Joãozinho de Jesus',
                type: 'imposto',
                value: -1680.72
            }
        ],
        '2023-01-11T03:00:00.000Z': [
            {
                title: 'Prestação de Serviços 2: Delta Code',
                type: 'receita',
                value: 9100.28
            }
        ],
        '2023-01-19T03:00:00.000Z': [
            {
                title: 'INSS: Kaori Ayanami',
                type: 'imposto',
                value: -780.42
            }
        ]
    }
};

// new Date('2023-01-10T03:00:00.000Z').toLocaleString('pt-BR',).split(',')[0]
