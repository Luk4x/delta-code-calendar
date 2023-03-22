import { MainStyled, UserInfoStyled, SectionStyled, FooterStyled } from './styled';

import { user } from '../../utils/userMockup';

import { UserCalendar } from '../UserCalendar';
import { UserCalendarEvents } from '../UserCalendarEvents';
import { UserCalendarProvider } from '../../context/UserCalendarContext';

export function MainContent() {
    const userFirstName = user.fullName.split(' ')[0];

    return (
        <MainStyled>
            <UserInfoStyled>
                <h4>
                    Bom dia, <span>{userFirstName}</span>!
                </h4>
                <div>
                    <img src={user.imageUrl} alt={`Foto do usuário ${user.fullName}`} />
                    <div>
                        <p>{user.fullName}</p>
                        <strong>{user.organization}</strong>
                    </div>
                </div>
            </UserInfoStyled>
            <UserCalendarProvider>
                <SectionStyled>
                    <UserCalendar />
                    <UserCalendarEvents />
                </SectionStyled>
            </UserCalendarProvider>
            <FooterStyled>
                Desenvolvido por{' '}
                <strong>
                    Delta Code LTDA<span>&#174;</span> 2023
                </strong>
            </FooterStyled>
        </MainStyled>
    );
}
