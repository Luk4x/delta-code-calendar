import styled from 'styled-components';

export const NavStyled = styled.nav`
    position: fixed;
    height: calc(100vh - 75px);
    width: 80px;
    top: 75px;
    left: 0;
    background: ${props => props.theme.colorSchema.backgroundHighlightLevel2};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 40px;
    padding: 32px 28px;

    img {
        cursor: pointer;
    }
`;
