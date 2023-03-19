import styled from 'styled-components';

export const ContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;

    label {
        font-size: 14px;
        color: ${props => props.theme.colorSchema.textBaseLevel3};
        text-transform: capitalize;
    }
`;

export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    background: ${props => props.theme.colorSchema.backgroundBaseLevel4};
    border: 1px solid ${props => props.theme.colorSchema.borderBaseLevel2};
    padding: 14px 13px 14px 18px;
    border-radius: 3px;
    width: 185px;
    height: 42px;

    svg {
        height: 14px;

        path {
            fill: ${props => props.theme.colorSchema.textBase};
        }
    }

    select {
        cursor: pointer;
        background: none;
        text-transform: capitalize;
        height: 40px;
        width: 100%;
        font-size: 13px;
        font-weight: 700;
        color: ${props => props.theme.colorSchema.textBase};
    }
`;
