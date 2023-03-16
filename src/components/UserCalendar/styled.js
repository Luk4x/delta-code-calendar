import styled from 'styled-components';

export const SectionStyled = styled.section`
    border-right: 2px solid ${props => props.theme.colorSchema.borderBase};
    min-height: 65vh;
    max-width: 452px;
`;

export const WrapTopButtonsStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
`;
