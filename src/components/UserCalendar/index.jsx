import { useContext } from 'react';
import { UserCalendarContext } from '../../context/UserCalendarContext';

import {
    ContainerStyled,
    WrapTopButtonsStyled,
    WrapSelectStyled,
    WrapDaysStyled,
    WeekdaysNameStyled,
    DaysInMonthStyled
} from './styled';

import { CalendarSelect } from '../CalendarSelect';

import {
    getCalendarEventsAlert,
    getFormattedDate,
    getYearsRangeList,
    monthNamesList,
    weekdayNamesList
} from '../../utils/calendarHelpers';

export function UserCalendar() {
    const {
        currentDay,
        currentYear,
        selectedMonthIndex,
        setSelectedMonthIndex,
        selectedYear,
        setSelectedYear,
        rangeOfDaysInMonth,
        setViewEventsInDate
    } = useContext(UserCalendarContext);

    const yearsRageList = getYearsRangeList(currentYear, 10);
    const selectedYearIndex = yearsRageList.indexOf(selectedYear);

    const timeSkipButton = name => {
        console.log(`calling button: '${name}'`);
    };

    const handleDayClick = (dayValue, isFromThisMonth, isFromPreviousMonth) => {
        // if user is clicking in a day that isFromThisMonth, then it will show the selected day events, else if user is clicking in a day that isFromPreviousMonth, then it will go back one month (or if is already in first month, it will go to the last month from last year), else if user is clicking in a day that !isFromPreviousMonth (next month), then it will go next one month (or if is already in last month, it will go to the first month from next year)

        if (isFromThisMonth) {
            const date = getFormattedDate(
                new Date(selectedYear, selectedMonthIndex, dayValue),
                'JSON'
            );
            setViewEventsInDate(date);
        } else if (isFromPreviousMonth) {
            if (selectedMonthIndex === 0) {
                setSelectedMonthIndex(11);
                setSelectedYear(selectedYear - 1);
            } else {
                setSelectedMonthIndex(selectedMonthIndex - 1);
            }
            setViewEventsInDate('initial');
        } else {
            if (selectedMonthIndex === 11) {
                setSelectedMonthIndex(0);
                setSelectedYear(selectedYear + 1);
            } else {
                setSelectedMonthIndex(selectedMonthIndex + 1);
            }
            setViewEventsInDate('initial');
        }
    };

    return (
        <ContainerStyled>
            <WrapTopButtonsStyled>
                {['Hoje', 'Esta semana', 'Este mês'].map(buttonName => (
                    <button key={buttonName} onClick={() => timeSkipButton(buttonName)}>
                        {buttonName}
                    </button>
                ))}
            </WrapTopButtonsStyled>
            <WrapSelectStyled>
                <CalendarSelect
                    name="months"
                    apparentName="mês"
                    values={monthNamesList}
                    selectedValue={selectedMonthIndex}
                    setValue={setSelectedMonthIndex}
                    updateUserCalendarEvents={setViewEventsInDate}
                />
                <CalendarSelect
                    name="years"
                    apparentName="ano"
                    values={yearsRageList}
                    selectedValue={selectedYearIndex}
                    setValue={setSelectedYear}
                    updateUserCalendarEvents={setViewEventsInDate}
                />
            </WrapSelectStyled>
            <WrapDaysStyled>
                {weekdayNamesList.map(weekDayName => (
                    <WeekdaysNameStyled key={weekDayName}>
                        {weekDayName.charAt(0)}
                    </WeekdaysNameStyled>
                ))}
                {rangeOfDaysInMonth.map((day, i) => (
                    <DaysInMonthStyled
                        key={i}
                        currentDay={day.value === currentDay}
                        dayEvents={
                            day.isFromThisMonth &&
                            getCalendarEventsAlert(
                                new Date(selectedYear, selectedMonthIndex, day.value)
                            )
                        }
                        isFromThisMonth={day.isFromThisMonth}
                        onClick={() =>
                            handleDayClick(
                                day.value,
                                day.isFromThisMonth,
                                day.isFromPreviousMonth
                            )
                        }
                    >
                        <span>{day.value}</span>
                    </DaysInMonthStyled>
                ))}
            </WrapDaysStyled>
        </ContainerStyled>
    );
}
