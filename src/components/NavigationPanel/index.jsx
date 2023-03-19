import { NavStyled } from './styled';

import calendarIcon from '/assets/icons/calendar-dates.svg';
import volumeIcon from '/assets/icons/volume.svg';
import commentIcon from '/assets/icons/comment.svg';
import documentIcon from '/assets/icons/file-document.svg';

export function NavigationPanel() {
    return (
        <NavStyled>
            <img src={calendarIcon} alt="Ícone de calendário" />
            <img src={volumeIcon} alt="Ícone de volume" />
            <img src={commentIcon} alt="Ícone de comentário" />
            <img src={documentIcon} alt="Ícone de arquivo documento" />
        </NavStyled>
    );
}
