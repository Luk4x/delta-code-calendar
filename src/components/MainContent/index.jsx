import { MainStyled, UserInfoStyled } from './styled';
import { UserCalendar } from '../UserCalendar';
import { Footer } from '../Footer';

export function MainContent() {
    return (
        <MainStyled>
            <UserInfoStyled>
                <h4>Bom dia, Luiz!</h4>
                <div>
                    <img
                        src="https://github.com/luiz-from-delta.png"
                        alt="Foto do usuário"
                    />
                    <div>
                        <p>Luiz Antônio Neto</p>
                        <strong>Delta Code Ltda</strong>
                    </div>
                </div>
            </UserInfoStyled>
            <UserCalendar />
            <Footer />
        </MainStyled>
    );
}
