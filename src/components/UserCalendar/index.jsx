import { SectionStyled, WrapTopButtonsStyled } from './styled';

import { CalendarTimeSkipButton } from '../CalendarTimeSkipButton';
import { CalendarSelect } from '../CalendarSelect';

import { monthNames } from '../../utils/calendarHelpers';

export function UserCalendar() {
    return (
        <SectionStyled>
            <WrapTopButtonsStyled>
                {['Hoje', 'Esta semana', 'Este mês'].map(buttonName => (
                    <CalendarTimeSkipButton buttonName={buttonName} key={buttonName} />
                ))}
            </WrapTopButtonsStyled>
            <CalendarSelect
                name="months"
                apparentName="mês"
                values={monthNames}
                selectedValue={new Date().getMonth()}
            />
        </SectionStyled>
    );
}
