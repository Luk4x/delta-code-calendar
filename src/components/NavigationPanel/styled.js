import styled from 'styled-components';

export const NavStyled = styled.nav`
    position: fixed;
    height: calc(100vh - 75px);
    width: 80px;
    top: 75px;
    left: 0;
    z-index: 1;
    background: ${props => props.theme.colorSchema.backgroundHighlightLevel2};
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 40px;
    padding: 32px 28px;

    div {
        cursor: pointer;
    }

    span {
        display: none;
    }

    @media screen and (max-width: 640px) {
        background: ${props => props.theme.colorSchema.backgroundHighlight};
        top: unset;
        bottom: 0;
        height: 75px;
        width: 100%;
        flex-direction: row;
        justify-content: space-evenly;
        gap: 20px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding: 16px 0;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        span {
            display: inline-block;
            font-size: 13px;
            color: ${props => props.theme.colorSchema.backgroundBase};
        }
    }
`;
