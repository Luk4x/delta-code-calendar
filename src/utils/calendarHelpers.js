export const monthNamesList = [
    'janeiro',
    'fevereiro',
    'março',
    'abril',
    'maio',
    'junho',
    'julho',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'dezembro'
];

export const getYearsRangeList = currentYear => {
    let yearsRange = [];

    for (let i = 10; i >= 1; i--) {
        yearsRange.push(currentYear - i);
    }

    yearsRange.push(currentYear);

    for (let i = 1; i <= 10; i++) {
        yearsRange.push(currentYear + i);
    }

    return yearsRange;
};
