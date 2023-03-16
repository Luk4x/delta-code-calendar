import { HeaderStyled } from './styled';

import DeltaCodeFullLogo from '../../assets/icons/delta-code-full-logo.svg';
import MenuIcon from '../../assets/icons/menu.svg';

export function Header() {
    return (
        <HeaderStyled>
            <div>
                <img src={DeltaCodeFullLogo} alt="Delta Code Logo" />
                <h1>Página Inicial</h1>
            </div>
            <img src={MenuIcon} alt="Menu Icon" />
        </HeaderStyled>
    );
}
