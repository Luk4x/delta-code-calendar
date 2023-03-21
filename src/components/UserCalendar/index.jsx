import { useContext } from 'react';
import { UserCalendarContext } from '../../context/UserCalendarContext';

import {
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
    getRangeOfDaysInMonth,
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
        setViewEventsInDate
    } = useContext(UserCalendarContext);

    const yearsRageList = getYearsRangeList(currentYear, 10);
    const currentYearIndex = yearsRageList.indexOf(currentYear);
    const rangeOfDaysInMonth = getRangeOfDaysInMonth(selectedYear, selectedMonthIndex);

    const timeSkipButton = id => {
        console.log(`calling button: '${id}'`);
    };

    return (
        <div>
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
                />
                <CalendarSelect
                    name="years"
                    apparentName="ano"
                    values={yearsRageList}
                    selectedValue={currentYearIndex}
                    setValue={setSelectedYear}
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
                                selectedYear,
                                selectedMonthIndex,
                                day.value
                            )
                        }
                        onClick={() => {
                            const date = getFormattedDate(
                                new Date(selectedYear, selectedMonthIndex, day.value),
                                'JSON'
                            );
                            setViewEventsInDate(date);
                        }}
                    >
                        <span>{day.value}</span>
                    </DaysInMonthStyled>
                ))}
            </WrapDaysStyled>
        </div>
    );
}
