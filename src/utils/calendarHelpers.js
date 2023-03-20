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
    const totalDaysInPreviousMonth = new Date(year, month, 0).getDate();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekday = new Date(year, month).getDay();

    const rangeOfDaysInMonth = [];

    // Filling the array with the days of the current month
    for (let i = 1; i <= totalDaysInMonth; i++) {
        rangeOfDaysInMonth.push(i);
    }

    // Filling the beginning of the array with the last days of the last month until the first day of the current month aligns with the day of the week
    for (let i = 0; i < firstWeekday; i++) {
        rangeOfDaysInMonth.unshift(totalDaysInPreviousMonth - i);
    }

    // Completing the array with the first days of the next month
    for (let i = 1; rangeOfDaysInMonth.length < 35; i++) {
        rangeOfDaysInMonth.push(i);
    }

    return rangeOfDaysInMonth;
};
