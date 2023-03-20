import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: absolute;
    top: 0;
    right: calc(-64px * 2 - 2px);

    p {
        font-size: 14px;
        font-weight: 500;
        color: ${props => props.theme.colorSchema.textBaseLevel3};
        margin-bottom: 20px;
    }
`;
