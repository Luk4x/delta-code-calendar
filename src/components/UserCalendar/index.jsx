import { SectionStyled, WrapTopButtonsStyled, WrapSelectStyled } from './styled';

import { CalendarTimeSkipButton } from '../CalendarTimeSkipButton';
import { CalendarSelect } from '../CalendarSelect';

import { getYearsRangeList, monthNamesList } from '../../utils/calendarHelpers';

export function UserCalendar() {
    const currentMonthIndex = new Date().getMonth();

    const currentYear = new Date().getFullYear();
    const yearsRageList = getYearsRangeList(currentYear);
    const currentYearIndex = yearsRageList.indexOf(currentYear);

    return (
        <SectionStyled>
            <WrapTopButtonsStyled>
                {['Hoje', 'Esta semana', 'Este mês'].map(buttonName => (
                    <CalendarTimeSkipButton buttonName={buttonName} key={buttonName} />
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
        </SectionStyled>
    );
}
