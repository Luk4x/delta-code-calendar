import styled from 'styled-components';

export const FooterStyled = styled.footer`
    color: ${props => props.theme.colorSchema.textBaseLevel3};
    font-size: 14px;
    font-weight: 500;
    margin: 50px 0 29px;

    strong,
    span {
        font-size: 14px;
        font-weight: 700;
    }
`;
