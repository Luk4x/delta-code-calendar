import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: absolute;
    top: 0;
    width: 307px;
    left: calc(388px + 64px * 2 + 2px);

    p {
        font-size: 14px;
        font-weight: 500;
        color: ${props => props.theme.colorSchema.textBaseLevel3};
        margin-bottom: 20px;
    }
`;

export const SpanStyled = styled.span`
    color: #f1a;
`;
