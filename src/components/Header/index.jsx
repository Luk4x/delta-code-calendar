import { HeaderStyled } from './styled';

import DeltaCodeFullLogo from '../../assets/icons/delta-code-full-logo.svg';
import MenuIcon from '../../assets/icons/menu.svg';

export function Header() {
    return (
        <HeaderStyled>
            <div>
                <img src={DeltaCodeFullLogo} alt="Logo da Delta Code" />
                <h1>Página Inicial</h1>
            </div>
            <img src={MenuIcon} alt="Ícone de menu" />
        </HeaderStyled>
    );
}
