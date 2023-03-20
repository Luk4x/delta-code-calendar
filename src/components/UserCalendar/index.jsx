import { useState } from 'react';

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
    getRangeOfDaysInMonth,
    getYearsRangeList,
    monthNamesList,
    weekdayNamesList
} from '../../utils/calendarHelpers';

export function UserCalendar() {
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    const yearsRageList = getYearsRangeList(currentYear, 10);
    const currentYearIndex = yearsRageList.indexOf(currentYear);

    const [selectedMonthIndex, setSelectedMonthIndex] = useState(currentMonth);
    const [selectedYear, setSelectedYear] = useState(currentYear);
    const rangeOfDaysInMonth = getRangeOfDaysInMonth(selectedYear, selectedMonthIndex);

    const timeSkipButton = id => {
        console.log(`calling button: '${id}'`);
    };

    const viewEventsInDate = (year, month, day) => {
        console.log(new Date(year, month, day));
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
                        onClick={() =>
                            viewEventsInDate(selectedYear, selectedMonthIndex, day.value)
                        }
                    >
                        <span>{day.value}</span>
                    </DaysInMonthStyled>
                ))}
            </WrapDaysStyled>
        </div>
    );
}
