import styled from 'styled-components';

export const MainStyled = styled.main`
    margin-top: 30px;
    margin-left: calc(80px + 30px);
`;

export const UserInfoStyled = styled.div`
    color: ${props => props.theme.colorSchema.textBase};
    max-width: 388px;
    margin-bottom: 50px;

    h4 {
        font-weight: 500;
        font-size: 14px;
        margin-bottom: 20px;
    }

    & > div {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 20px;

        img {
            border-radius: 100%;
            width: 40px;
            border: 2px solid ${props => props.theme.colorSchema.backgroundHighlight};
        }

        p {
            font-weight: 500;
        }

        strong {
            color: ${props => props.theme.colorSchema.textBaseLevel2};
            font-size: 12px;
            text-transform: uppercase;
        }
    }
`;