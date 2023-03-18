import { MainStyled, UserInfoStyled } from './styled';

import { UserCalendar } from '../UserCalendar';
import { Footer } from '../Footer';

import { user } from '../../utils/userMockup';

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
            <UserCalendar />
            <Footer />
        </MainStyled>
    );
}
