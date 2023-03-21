import { useContext } from 'react';
import { UserCalendarContext } from '../../context/UserCalendarContext';

import { ContainerStyled } from './styled';

export function UserCalendarEvents() {
    const { currentDay, viewEventsInDate } = useContext(UserCalendarContext);

    console.log(viewEventsInDate);

    return (
        <ContainerStyled>
            <p>Legenda</p>
            <div>
                <span>{currentDay}</span>
                <p>Hoje</p>
            </div>
        </ContainerStyled>
    );
}
