import styled from 'styled-components';

export const HeaderStyled = styled.header`
    background: ${props => props.theme.colorSchema.backgroundHighlight};
    height: 75px;
    width: 100%;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 35px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 35px;

        h1 {
            color: ${props => props.theme.colorSchema.backgroundBase};
            font-weight: 700;
        }
    }

    & > img {
        cursor: pointer;
    }
`;
