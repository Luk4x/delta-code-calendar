import styled from 'styled-components';

export const ContainerStyled = styled.div`
    @media screen and (max-width: 1040px) {
        border-bottom: 2px solid ${props => props.theme.colorSchema.borderBase};
        padding-bottom: 24px;
        margin-bottom: 24px;
    }
`;

export const WrapTopButtonsStyled = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;

    button {
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
    }
`;

export const WrapSelectStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 34px;
`;

export const WrapDaysStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    place-items: center;
    gap: 20px;
    max-width: 388px;

    span,
    button,
    button span {
        width: 30px;
        height: 30px;
        font-size: 14px;
        text-transform: uppercase;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const WeekdaysNameStyled = styled.span`
    font-weight: 500;
    border-radius: 100%;
    background: ${props => props.theme.colorSchema.backgroundBaseLevel2};
    color: ${props => props.theme.colorSchema.textBase};
`;

export const DaysInMonthStyled = styled.button`
    cursor: pointer;
    position: relative;
    padding-bottom: 10px;
    background: none;
    border-radius: 8px;

    &:hover,
    &:active,
    &:focus {
        ${props =>
            !props.currentDay &&
            props.isFromThisMonth &&
            `border: 1px solid ${props.theme.colorSchema.backgroundHighlight}`};

        &::before,
        &::after {
            margin: -1px;
        }
    }

    span {
        color: ${props => props.theme.colorSchema.textBaseLevel3};

        ${props =>
            props.currentDay &&
            `
            background: ${props.theme.colorSchema.backgroundHighlight};
            color: ${props.theme.colorSchema.backgroundBase};
            border-radius: 100%;
            font-weight: 500;
        `}
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        bottom: 4px;
        width: 6px;
        height: 6px;
        border-radius: 100%;
    }

    ${({ isFromThisMonth }) => !isFromThisMonth && `opacity: 0.5;`}

    ${props => {
        switch (props.dayEvents) {
            case 'mixedValues':
                return `
                    &::before {
                        left: 8px;
                        background: ${props.theme.colorSchema.backgroundHighlight};
                    }
                    
                    &::after {
                        left: 16px;
                        background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                    }
                    `;

            case 'onlyPositiveValues':
                return `
                        &::before {
                            left: 8px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                        
                        &::after {
                            left: 16px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                `;

            case 'onlyNegativeValues':
                return `
                        &::before {
                            left: 8px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                        
                        &::after {
                            left: 16px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                `;

            case 'negativeValue':
                return `  
                        &::after {
                            left: 12px;
                            background: ${props.theme.colorSchema.backgroundHighlightLevel3};
                        }
                `;

            case 'positiveValue':
                return `
                        &::before {
                            left: 12px;
                            background: ${props.theme.colorSchema.backgroundHighlight};
                        }
                `;

            default:
                return null;
        }
    }}
`;
