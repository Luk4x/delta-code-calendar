import { SectionStyled, WrapTopButtonsStyled } from './styled';

import { CalendarTimeSkipButton } from '../CalendarTimeSkipButton';

export function UserCalendar() {
    return (
        <SectionStyled>
            <WrapTopButtonsStyled>
                {['Hoje', 'Esta semana', 'Este mês'].map(buttonName => (
                    <CalendarTimeSkipButton buttonName={buttonName} key={buttonName} />
                ))}
            </WrapTopButtonsStyled>
        </SectionStyled>
    );
}
