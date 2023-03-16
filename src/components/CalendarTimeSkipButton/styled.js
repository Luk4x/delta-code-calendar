import styled from 'styled-components';

export const ButtonStyled = styled.button`
    padding: 5px 13px;
    border-radius: 3px;
    background: ${props => props.theme.colorSchema.backgroundBaseLevel2};
    color: ${props => props.theme.colorSchema.textBaseLevel3};
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover,
    :nth-child(3) {
        background: ${props => props.theme.colorSchema.backgroundHighlightLevel4};
        color: ${props => props.theme.colorSchema.backgroundHighlight};
    }
`;
