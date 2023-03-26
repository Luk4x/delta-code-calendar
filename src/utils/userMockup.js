// Change the movements to this structure, navigate between the months (i also put one for December of 2022), and get a sense of how it would be if you were consuming an API with all this data pulled from your account, like the Google Calendar API for example.
const exampleOfAPIData = {
    '2022-12-25': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        },
        {
            title: 'Prestação de Serviços: Delta Code...',
            type: 'receita',
            value: 12050
        }
    ],
    '2023-01-10': [
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
    '2023-01-11': [
        {
            title: 'Prestação de Serviços 2: Delta Code',
            type: 'receita',
            value: 9100.28
        }
    ],
    '2023-01-19': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-02-10': [
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
    '2023-02-11': [
        {
            title: 'Prestação de Serviços 2: Delta Code',
            type: 'receita',
            value: 9100.28
        }
    ],
    '2023-02-19': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-02-20': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-02-08': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        },
        {
            title: 'Prestação de Serviços: Delta Code...',
            type: 'receita',
            value: 12050
        }
    ],
    '2023-03-04': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-05-19': [
        {
            title: 'Prestação de Serviços 2: Delta Code',
            type: 'receita',
            value: 9100.28
        }
    ],
    '2023-06-07': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        },
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-06-01': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        }
    ],
    '2023-07-01': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-08-02': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        },
        {
            title: 'FGTS: Joãozinho de Jesus',
            type: 'imposto',
            value: -1680.72
        }
    ],
    '2023-08-06': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        },
        {
            title: 'Prestação de Serviços: Delta Code...',
            type: 'receita',
            value: 12050
        }
    ],
    '2023-08-11': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        }
    ],
    '2023-08-28': [
        {
            title: 'FGTS: Joãozinho de Jesus',
            type: 'imposto',
            value: -1680.72
        }
    ],
    '2023-08-22': [
        {
            title: 'FGTS: Joãozinho de Jesus',
            type: 'imposto',
            value: -1680.72
        },
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ],
    '2023-10-12': [
        {
            title: 'FGTS: Joãozinho de Jesus',
            type: 'imposto',
            value: -1680.72
        }
    ],
    '2023-11-03': [
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
            title: 'Prestação de Serviços 2: Delta Code...',
            type: 'receita',
            value: 12050
        },
        {
            title: 'FGTS: Joãozinho de Jesus',
            type: 'imposto',
            value: -1680.72
        }
    ],
    '2023-12-17': [
        {
            title: 'Pró-Labore: Luiz Antônio Teixeira...',
            type: 'salário',
            value: 10000
        }
    ]
};

const challengeData = {
    '2023-01-10': [
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
    '2023-01-11': [
        {
            title: 'Prestação de Serviços 2: Delta Code',
            type: 'receita',
            value: 9100.28
        }
    ],
    '2023-01-19': [
        {
            title: 'INSS: Kaori Ayanami',
            type: 'imposto',
            value: -2780.42
        }
    ]
};

export const user = {
    fullName: 'luiz antônio neto',
    imageUrl: 'https://github.com/luiz-from-delta.png',
    organization: 'delta code ltda',
    movements: exampleOfAPIData
};
