import { NavStyled } from './styled';

import calendarIcon from '/assets/icons/calendar-dates.svg';
import volumeIcon from '/assets/icons/volume.svg';
import commentIcon from '/assets/icons/comment.svg';
import documentIcon from '/assets/icons/file-document.svg';

export function NavigationPanel() {
    return (
        <NavStyled>
            <div>
                <img src={calendarIcon} alt="Ícone de calendário" />
                <span>Calendário</span>
            </div>
            <div>
                <img src={volumeIcon} alt="Ícone de volume" />
                <span>Comunicados</span>
            </div>
            <div>
                <img src={commentIcon} alt="Ícone de comentário" />
                <span>Solicitações</span>
            </div>
            <div>
                <img src={documentIcon} alt="Ícone de arquivo documento" />
                <span>Processos</span>
            </div>
        </NavStyled>
    );
}
