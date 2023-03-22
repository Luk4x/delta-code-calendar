export const getFormattedCurrency = value => {
    const formattedValue = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);

    if (value > 0) return formattedValue;
    else {
        const formattedNegativeValue = formattedValue.replace('-', '');
        return formattedNegativeValue;
    }
};
