import { user } from './userMockup';

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

export const weekdayNamesList = [
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
        rangeOfDaysInMonth.push({ value: i, isFromThisMonth: true });
    }

    // Filling the beginning of the array with the last days of the last month until the first day of the current month aligns with the day of the week
    for (let i = 0; i < firstWeekday; i++) {
        rangeOfDaysInMonth.unshift({
            value: totalDaysInPreviousMonth - i,
            isFromThisMonth: false
        });
    }

    // Completing the array with the first days of the next month
    for (let i = 1; rangeOfDaysInMonth.length < 42; i++) {
        rangeOfDaysInMonth.push({ value: i, isFromThisMonth: false });
    }

    return rangeOfDaysInMonth;
};

export const getFormattedDate = (date, returnType) => {
    if (returnType === 'pt-BR') {
        return new Date(date).toLocaleString('pt-BR').split(',')[0];
    } else if (returnType === 'JSON') {
        return date.toJSON().split('T')[0];
    }
};

export const getCalendarEventsAlert = date => {
    const receivedDate = getFormattedDate(date, 'JSON');

    if (user.movements[receivedDate]) {
        if (user.movements[receivedDate].length > 1) {
            const onlyPositive = user.movements[receivedDate].reduce(
                (acc, movement) => movement.value > 0 && acc,
                true
            );

            const onlyNegative = user.movements[receivedDate].reduce(
                (acc, movement) => movement.value < 0 && acc,
                true
            );

            const mixed = !onlyNegative && !onlyPositive;

            if (mixed) return 'mixedValues';
            else if (onlyNegative) return 'onlyNegativeValues';
            else return 'onlyPositiveValues';
        } else {
            if (user.movements[receivedDate][0].value > 0) return 'positiveValue';
            else return 'negativeValue';
        }
    } else return null;
};
