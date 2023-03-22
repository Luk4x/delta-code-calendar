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

// Returns a array of years based on year received. The size of this array is calculated from range received.
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

// Returns a array with 42 items to fill the grid layout, with days of received month, last days of past month and first days of future month.
export const getRangeOfDaysInMonth = (year, month) => {
    const totalDaysInPreviousMonth = new Date(year, month, 0).getDate();
    const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
    const firstWeekday = new Date(year, month).getDay();

    const rangeOfDaysInMonth = [];

    // Filling the array with the days of the current month.
    for (let i = 1; i <= totalDaysInMonth; i++) {
        rangeOfDaysInMonth.push({ value: i, isFromThisMonth: true });
    }

    // Filling the beginning of the array with the last days of the last month until the first day of the current month aligns with the day of the week.
    for (let i = 0; i < firstWeekday; i++) {
        rangeOfDaysInMonth.unshift({
            value: totalDaysInPreviousMonth - i,
            isFromThisMonth: false
        });
    }

    // Completing the array with the first days of the next month.
    for (let i = 1; rangeOfDaysInMonth.length < 42; i++) {
        rangeOfDaysInMonth.push({ value: i, isFromThisMonth: false });
    }

    return rangeOfDaysInMonth;
};

export const getFormattedDate = (date, formatType) => {
    if (formatType === 'pt-BR') {
        // Check if date is in JSON Format used (ex: 2023-03-10). This is necessary because JS Date bug: https://stackoverflow.com/questions/29047991/tojson-on-date-object-converting-the-date-back-to-utc
        const isDateJSON = date.length === 10 && date.split('-').length === 3;
        if (isDateJSON) {
            const dateYear = new Date(date).getFullYear();
            const dateMonth = new Date(date).getMonth();
            const dateDay = new Date(date).getDate();

            const JSONDateFixed = new Date(dateYear, dateMonth, dateDay + 1);
            return new Date(JSONDateFixed).toLocaleString('pt-BR').split(',')[0];
        } else {
            return new Date(date).toLocaleString('pt-BR').split(',')[0];
        }
    } else if (formatType === 'JSON') {
        return date.toJSON().split('T')[0];
    }
};

export const getCalendarEventsAlert = date => {
    const receivedDate = getFormattedDate(date, 'JSON');

    // Checking if this movement exists in user data.
    if (user.movements[receivedDate]) {
        // Checking if exists one or more movement from this date in user data.
        if (user.movements[receivedDate].length > 1) {
            const onlyPositiveValues = user.movements[receivedDate].reduce(
                (acc, movement) => movement.value > 0 && acc,
                true
            );

            const onlyNegativeValues = user.movements[receivedDate].reduce(
                (acc, movement) => movement.value < 0 && acc,
                true
            );

            const mixedValues = !onlyNegativeValues && !onlyPositiveValues;

            if (mixedValues) return 'mixedValues';
            else if (onlyNegativeValues) return 'onlyNegativeValues';
            else return 'onlyPositiveValues';
        } else {
            if (user.movements[receivedDate][0].value > 0) return 'positiveValue';
            else return 'negativeValue';
        }
    } else return null;
};

export const getUserEventsInSelectedDay = JSONDate => {
    const userEventsInSelectedDay = user.movements[JSONDate];

    if (userEventsInSelectedDay) return userEventsInSelectedDay;
    else return null;
};
