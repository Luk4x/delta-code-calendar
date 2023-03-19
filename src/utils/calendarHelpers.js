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

export const weekDayNamesList = [
    'domingo',
    'segunda',
    'terça',
    'quarta',
    'quinta',
    'sexta',
    'sábado'
];

export const getYearsRangeList = (currentYear, range) => {
    const yearsRangeList = [];

    for (let i = range; i >= 1; i--) {
        yearsRangeList.push(currentYear - i);
    }

    yearsRangeList.push(currentYear);

    for (let i = 1; i <= range; i++) {
        yearsRangeList.push(currentYear + i);
    }

    return yearsRangeList;
};

export const getRangeOfDaysInMonth = (year, month) => {
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const rangeOfDaysInMonth = [];

    for (let i = 1; i <= totalDaysInMonth; i++) {
        rangeOfDaysInMonth.push(i);
    }

    return rangeOfDaysInMonth;
};
