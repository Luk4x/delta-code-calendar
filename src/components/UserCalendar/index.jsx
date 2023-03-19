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

export function UserCalendar() {
    const currentMonthIndex = new Date().getMonth();

    const currentYear = new Date().getFullYear();
    const yearsRageList = getYearsRangeList(currentYear, 10);
    const currentYearIndex = yearsRageList.indexOf(currentYear);

    const rangeOfDaysInMonth = getRangeOfDaysInMonth(currentYear, currentMonthIndex);

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
                    selectedValue={currentMonthIndex}
                />
                <CalendarSelect
                    name="years"
                    apparentName="ano"
                    values={yearsRageList}
                    selectedValue={currentYearIndex}
                />
            </WrapSelectStyled>
            <WrapDaysStyled>
                {weekDayNamesList.map(weekDayName => (
                    <WeekDaysNameStyled key={weekDayName}>
                        {weekDayName.charAt(0)}
                    </WeekDaysNameStyled>
                ))}
                {rangeOfDaysInMonth.map(day => (
                    <DaysInMonthStyled key={day}>{day}</DaysInMonthStyled>
                ))}
            </WrapDaysStyled>
        </SectionStyled>
    );
}
