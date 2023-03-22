import { createContext, useState } from 'react';

import { getRangeOfDaysInMonth } from '../utils/calendarHelpers';

export const UserCalendarContext = createContext();

export const UserCalendarProvider = ({ children }) => {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const rangeOfDaysInMonth = getRangeOfDaysInMonth(selectedYear, selectedMonthIndex);

    const [viewEventsInDate, setViewEventsInDate] = useState('initial');

    return (
        <UserCalendarContext.Provider
            value={{
                currentDay,
                currentMonth,
                currentYear,
                selectedMonthIndex,
                setSelectedMonthIndex,
                selectedYear,
                setSelectedYear,
                rangeOfDaysInMonth,
                viewEventsInDate,
                setViewEventsInDate
            }}
        >
            {children}
        </UserCalendarContext.Provider>
    );
};
