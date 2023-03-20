import {
    SectionStyled,
    WrapTopButtonsStyled,
    WrapSelectStyled,
    WrapDaysStyled,
    WeekDaysNameStyled,
    DaysInMonthStyled
} from './styled';

import { CalendarSelect } from '../CalendarSelect';

import {
    getRangeOfDaysInMonth,
    getYearsRangeList,
    monthNamesList,
    weekDayNamesList
} from '../../utils/calendarHelpers';
import { useState } from 'react';

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

    return (
        <SectionStyled>
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
                {weekDayNamesList.map(weekDayName => (
                    <WeekDaysNameStyled key={weekDayName}>
                        {weekDayName.charAt(0)}
                    </WeekDaysNameStyled>
                ))}
                {rangeOfDaysInMonth.map((day, i) => (
                    <DaysInMonthStyled key={i} currentDay={day === currentDay}>
                        {day}
                    </DaysInMonthStyled>
                ))}
            </WrapDaysStyled>
        </SectionStyled>
    );
}
