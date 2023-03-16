import { CalendarTimeSkipButton } from '../CalendarTimeSkipButton';
import { SectionStyled, WrapTopButtonsStyled } from './styled';

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
